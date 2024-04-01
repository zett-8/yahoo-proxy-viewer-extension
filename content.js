chrome.storage.sync.get('proxyURL', function(data) {
    console.log(` 🔄 Using Yahoo proxy viewer extension 🔄 \n Proxy URL: ${data.proxyURL} `)

    // fetch data via proxy server
    const targetURL = window.location.href;
    const url = `${data.proxyURL}?host=${encodeURIComponent(targetURL)}`

    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Replace current html with fetched data
            document.documentElement.innerHTML = data;
        })
        .catch(error => console.error('Error fetching data:', error));
})
