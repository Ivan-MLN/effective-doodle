const urlInput = document.getElementById('urlInput').value;
const downloadButton = document.getElementById('downloadButton');

document.getElementById('urlInput').addEventListener('input', function() {
    downloadButton.disabled = false
});

async function unduh() {
    if (urlInput && urlInput.includes("tiktok")) {
        const Tiktok = new TikTokDownloader();
        const { result } = await Tiktok.download(urlInput);
        window.location.href = result.video2;
    } else {
        return;
    }
}

class TikTokDownloader {
    constructor() {
        this.baseUrl = "https://api.tiklydown.eu.org/api";
    }
    async download(url) {
        const { data } = await axios.get(`${this.baseUrl}/download/v2?url=${encodeURIComponent(url)}`);
        return data;
    }
}
