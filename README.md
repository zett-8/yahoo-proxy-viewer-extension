# yahoo-proxy-viewer-extension
The Yahoo Proxy Viewer Extension is a Chrome extension that enables viewing content of `*.yahoo.co.jp/*` from EEA(欧州経済領域) through a proxy.

## Requirements
- A Chromium-based browser 
- The proxy server set up at [jp-vercel-proxy](https://github.com/zett-8/jp-vercel-proxy)

## Setup
Follow these steps to get the extension up and running:
1. <b>Proxy Setup:</b> First, deploy your own instance of the [jp-vercel-proxy](https://github.com/zett-8/jp-vercel-proxy) on Vercel. Follow the instructions on the repository to set it up.
2. <b>Extension Installation:</b> Download this repository (or [latest release](https://github.com/zett-8/yahoo-proxy-viewer-extension/releases))and load it into your Chrome browser as an unpacked extension:
   - Open chrome://extensions in your Chrome-based browser.
   - Enable "Developer mode" at the top right.
   - Click on "Load unpacked" and select the downloaded repository folder.
3. <b>Configuration:</b> Go to the settings page of the extension and set the Proxy URL to the URL you deployed on Vercel.
4. <b>Usage:</b> Access any URL under *.yahoo.co.jp and it should now load through the configured proxy.

## Contact
If you have any questions, encounter any issues, or have suggestions, please open an issue on the [Issues page](https://github.com/zett-8/yahoo-proxy-viewer-extension/issues)
