const { Movie } = require("../models/Movie");
const video = document.querySelector("video");
require('dotenv').config();


function fetchYouTubeVideos(query) {
  const apiKey = process.env.youtubeAPI ;
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

function setVideo(videos) {
  const source = document.createElement("source");
  source.setAttribute(src,`https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1&mute=1`)
  source.setAttribute(type, "video/youtube")

  video.append(source)
}

let movie = Movie.title;

let query = `${movie} trailer`;

fetchYouTubeVideos(query).then(function (videos) {
    setVideo(videos);
});
