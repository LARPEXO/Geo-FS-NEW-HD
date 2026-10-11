
 // ==UserScript==
 // @name         GeoFS Esri World Imagery
 // @namespace    https://github.com/
 // @version      1.0.0
 // @description  Automatically selects Esri World Imagery in GeoFS
 // @author       GeoFS User
 // @match        https://www.geo-fs.com/*
 // @match        https://geo-fs.com/*
 // @run-at       document-idle
 // @grant        none
 // ==/UserScript==

(() => {
    "use strict";

    const TAG = "[GeoFS Esri Imagery]";
    const ESRI_URL =
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

    let applied = false;
    let attempts = 0;
    const maxAttempts = 60;

    async function applyEsriImagery() {
        if (applied) return;

        try {
            const api = window.geofs?.api;
            const Cesium = window.Cesium;

            if (!api?.viewer || !Cesium) {
                return;
            }

            if (typeof api.setImageryProvider !== "function") {
                console.warn(
                    TAG,
                    "GeoFS imagery API is unavailable."
                );
                return;
            }

            const provider = new Cesium.UrlTemplateImageryProvider({
                url: ESRI_URL,
                credit: "Esri World Imagery",
                maximumLevel: 19
            });

            if (provider.readyPromise) {
                await provider.readyPromise;
            }

            // GeoFS may reload while the imagery provider is preparing.
            if (!window.geofs?.api?.viewer) return;

            api.setImageryProvider(provider, false);
            applied = true;

            console.log(
                TAG,
                "Esri World Imagery selected successfully!"
            );
            console.log(
                TAG,
                "Image detail depends on location and tile availability."
            );
        } catch (error) {
            console.error(TAG, "Could not switch imagery:", error);
        }
    }

    const timer = setInterval(() => {
        attempts++;

        if (applied || attempts >= maxAttempts) {
            clearInterval(timer);
            if (!applied) {
                console.warn(
                    TAG,
                    "GeoFS was not ready. Refresh the page to retry."
                );
            }
            return;
        }

        applyEsriImagery();
    }, 1000);

    applyEsriImagery();
})();
