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

## Installation Without Tampermonkey

If you don't have Tampermonkey or don't want to use it, follow these steps:

1. Open `main.js` in this repository.
2. Copy the entire code.
3. Open [GeoFS](https://www.geo-fs.com/) and enter the simulator.
4. Open the browser's developer console by right-clicking the bottom UI area and selecting **Inspect**.
5. Open the **Console** tab.
6. If your browser displays a paste warning, follow its instructions. In Chrome, type `allow pasting` when prompted and press Enter.
7. Copy the code from `main.js` and paste it into the GeoFS console.
8. Press **Enter** to run the script.

The script will attempt to switch GeoFS to Esri World Imagery.

**Note:** Browser developer tools and GeoFS APIs may change, so this method may not work in every browser or GeoFS version.

## Credits

- **Esri World Imagery:** Imagery provider.
- **GeoFS:** Flight simulator.
- **Script author:** Repository owner.

This is an unofficial community project and is not affiliated with GeoFS or Esri.
