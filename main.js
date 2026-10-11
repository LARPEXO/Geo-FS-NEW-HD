
(async () => {
  try {
    if (!window.geofs?.api?.viewer || !window.Cesium) {
      throw new Error(
        "GeoFS is not ready. Enter the simulator first, then retry."
      );
    }

    const api = window.geofs.api;
    const Cesium = window.Cesium;

    const provider = new Cesium.UrlTemplateImageryProvider({
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      credit: "Esri World Imagery",
      maximumLevel: 19
    });

    await provider.readyPromise;

    api.setImageryProvider(provider, false);

    console.log("Esri World Imagery selected successfully!");
    console.log(
      "Imagery detail depends on the location and available tiles."
    );
  } catch (error) {
    console.error("Could not switch GeoFS imagery:", error);
  }
})();
