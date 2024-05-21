async function unduh() {
    const urlInput = document.getElementById('urlInput').value;
    if (urlInput && /^(https?:\/\/)?(www\.|vt\.|vm\.)?tiktok\.com\/.*$/.test(urlInput)) {
        const Tiktok = new TikTokDownloader();
        const { result } = await Tiktok.download(urlInput);
        window.location.href = result.video2;
    } else {
        alert('Harap masukkan URL TikTok dengan benar!');
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
