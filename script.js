async function unduh(type) {
    const url = document.getElementById('urlInput').value;
    if (url && url.includes("tiktok.com")) {
        const tiktok = new TikTokDownloader();
        const result = await tiktok.download(url);
        const { video2, video_hd, music } = result.result;
        
        if (!type) {
            document.getElementById("submit").style.display = "none";
            document.getElementById("vd").style.display = "block";
            document.getElementById("hd").style.display = "block";
            document.getElementById("mp3").style.display = "block";
            document.getElementById("vid").style.display = "block";
            document.getElementById("vidSource").src = video2; 
            document.getElementById("vid").load(); 
        } else {
            switch (type) {
                case "sd":
                    window.location.href = video2;
                    return video2;
                case "hd":
                    window.location.href = video_hd;
                    break;
                case "mp3":
                    window.location.href = music;
                    break;
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
