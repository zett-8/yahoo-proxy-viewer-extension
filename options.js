// 保存時の動作
document.getElementById('proxyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var proxyURL = document.getElementById('proxyURL').value;
    // Save proxy url to chrome storage
    chrome.storage.sync.set({ proxyURL }, function() {
        console.log('Saved proxy URL:', proxyUrl);
    });
});

// Load existing settings on init
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('proxyURL', function(data) {
        document.getElementById('proxyURL').value = data.proxyURL || '';
    });
});
