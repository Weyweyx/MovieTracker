function fetchYouTubeVideos(query) {
  const apiKey = "AIzaSyAZQxBxJRTVW5bNFyFSHAj-xF8GBWF3NQ4";
  const baseUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet";
  const url =
    baseUrl +
    "&q=" +
    encodeURIComponent(query) +
    "&key=" +
    apiKey +
    "&type=video";

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        return [];
      }
      return response.json();
    })
    .then(function (data) {
      return data.items || [];
    })
    .catch(function (error) {
      return [];
    });
}
