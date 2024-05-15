class TikTokDownloader {
  constructor() {
    this.baseUrl = "https://api.tiklydown.eu.org/api";
  }

  async download(url) {
      const res = await axios.get(`${this.baseUrl}/download?url=${url}`);
      return res.data;
  }
}
