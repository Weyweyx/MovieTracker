const source = document.querySelector("source");
const video = document.querySelector("video");
// require('dotenv').config();

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

const movieTitle = video.getAttribute("data-title");
console.log(movieTitle);

// const movie = "Warcraft";

const query = `${movieTitle} trailer`;
console.log(query);

function setVideo(trailer) {
  source.setAttribute("src", trailer);
}

fetchYouTubeVideos(query).then(function (videos) {
  const trailer = trailerLink(videos);
  console.log(trailer);
  setVideo(trailer);
});

// window.addEventListener("load", (event) => {
//   fetchYouTubeVideos(query).then(function (videos) {
//     setVideo(videos);
// });
//   console.log("page is fully loaded");
// })
