const { Movie } = require("../models/Movie");

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

function trailerLink(videos) {
  const trailer = `https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1&mute=1`;
  return trailer;
}

const movie = "Warcraft"

 
const query = `${movie} trailer`;
console.log(query)

// let movie = Movie.title;

// let query = `${movie} trailer`;

fetchYouTubeVideos(query).then(function (videos) {
  const trailer = trailerLink(videos);
  console.log(trailer)
  return trailer

})
