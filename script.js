async function unduh() {
    const url = document.getElementById('urlInput').value;
    if (url && /^(https?:\/\/)?(www\.|vt\.|vm\.)?tiktok\.com\/.*$/.test(url)) {
        const tiktok = new TikTokDownloader();
        const result = await tiktok.download(url);
        window.location.href = result;
    } else {
        alert('Harap masukkan URL TikTok dengan benar!');
    }
}




class TikTokDownloader {
  constructor() {
    this.baseUrl = "https://api.tiklydown.eu.org/api";
  }
  async download(url) {
      const res = await axios.get(this.baseUrl + "/download?url=" + url);
      return res.data.video.noWatermark;
  }
}
