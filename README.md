# GeoFS Esri World Imagery

A Tampermonkey userscript that attempts to switch GeoFS to Esri World Imagery automatically.

## Features

- Automatically attempts to select Esri World Imagery.
- Runs when opening GeoFS.
- Uses the Esri World Imagery tile service.
- No need to paste the code into the browser console every time.

## Installation

1. Install the Tampermonkey browser extension.
2. Open `Userscript.js` in this repository.
3. Open the raw file or copy the script into Tampermonkey's script editor.
4. Save and enable the userscript.
5. Open GeoFS and enter the simulator.

## Requirements

- A supported browser.
- Tampermonkey.
- Access to GeoFS and the Esri imagery service.

## Disclaimer

This is an unofficial community userscript and is not affiliated with GeoFS or Esri.

Imagery availability and detail vary by location. The script depends on GeoFS's internal API and may require updates if that API changes.

## No Tampermonkey
 - If you don't have and don't want tampermonkey go to main.js, copy it and go to Geo-FS
 - After that open your geofs console by right clicking at the bottom ui and then clicking inspect
 - Go to console tab and type exactly "Allow Pasting"
 - After that copy the main.js and paste it in the console part in Geo-FS
- Esri World Imagery: imagery provider.
- GeoFS: flight simulator.
- Script author: repository owner.
