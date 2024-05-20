const url = document.getElementById('urlInput').value;
async function unduh(type) {
    if (url && url.includes("tiktok.com")) {
        const tiktok = new TikTokDownloader();
        const { video2, video_hd, music } = await (await tiktok.download(url)).result
        if (!type) {
            document.getElementById("submit").style.display = "hidden"
            document.getElementById("vd").style.display = "block"
            document.getElementById("hd").style.display = "block"
            document.getElementById("mp3").style.display = "block"
            document.getElementById("vid").style.display = "block"
        } else {
        switch (type) {
            case "sd":
            window.location.href = video2
            return video2
            break 
            case "hd":
            window.location.href = video_hd
            case "mp3":
            window.location.href = json.result.music
            break
        }
      }
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
