const url = document.getElementById('urlInput').value;

async function unduh() {
    const url = document.getElementById('urlInput').value;
    if (url && /^(https?:\/\/)?(www\.|vt\.|vm\.)?tiktok\.com\/.*$/.test(url)) {
        const tiktok = new TikTokDownloader();
        const json = await tiktok.download(url);
        window.location.href = json.result.video2
    } else {
        alert('Harap masukkan URL TikTok dengan benar!');
    }
}




class TikTokDownloader {
  constructor() {
    this.baseUrl = "https://api.tiklydown.eu.org/api";
  }
  async download(url) {
      const res = await axios.get(this.baseUrl + "/download/v2?url=" + url);
      return res.data;
  }
}
