function createPopup() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const popup = document.createElement('div');
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1001';

    const message = document.createElement('p');
    message.innerHTML = '<b>yahoo-proxy-viewer-extension:</b><br />loading contents through proxy...';


    popup.appendChild(message);
    overlay.appendChild(popup);

    document.body.appendChild(overlay);
}

(async () => {
    async function checkPage(url) {
        try {
            const response = await fetch(url);
            if (response.status === 403) {
                createPopup();
                return false;
            } else {
                console.log('Fetch status:', response.status);
                return true;
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return false;
        }
    }

    async function fetchDataThroughProxy(proxyURL) {
        try {
            const targetURL = window.location.href;
            const url = `${proxyURL}?host=${encodeURIComponent(targetURL)}`;
            const response = await fetch(url);
            return await response.text();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    const proxyURL = await new Promise(resolve => chrome.storage.sync.get('proxyURL', data => resolve(data.proxyURL)));
    const _pageIsAvailable = checkPage(window.location.href)
    const _data = fetchDataThroughProxy(proxyURL)

    if (!(await _pageIsAvailable)) {
        console.log(` 🔄 Using Yahoo proxy viewer extension 🔄 \n Proxy URL: ${proxyURL} `)
        document.documentElement.innerHTML = await _data;
    }
})()
