const source = document.querySelector("source");
const video = document.querySelector("video");
const videoPlayer = document.querySelector("#videoplayer")
const bodyEl = document.querySelector("body")
const dataTitle = document.querySelector("h2")


async function fetchTrailer(){
  const title = encodeURIComponent(movieTitle)
  const response = await fetch(`/api/trailer/${title}`)
  const trailer = await response.json()
  return trailer
}

const movieTitle = dataTitle.getAttribute("data-title");
console.log(movieTitle);


const query = `${movieTitle} trailer`;
console.log(query);

function removeSpinner(){
  videoPlayer.removeChild(video)
}

function setVideo(trailer) {
  const newVideo = document.createElement("video")
  const newSource = document.createElement("source")
  newVideo.setAttribute("id","my-video")
  newVideo.setAttribute("class","video-js vjs-big-play-centered vjs-theme-sea")
  newVideo.setAttribute("controls","")
  newVideo.setAttribute("preload","auto")
  newVideo.setAttribute("fluid","true")
  newVideo.setAttribute("data-setup","{}")
  newSource.setAttribute("type","video/youtube")
  newSource.setAttribute("src", trailer);
  newVideo.append(newSource)
  videoPlayer.append(newVideo)
}

fetchTrailer().then(function (trailer) {
  console.log(trailer);
  setVideo(trailer);
  const videoScriptEl = document.createElement("script")
  const youtubeScriptEl = document.createElement("script")
  videoScriptEl.setAttribute("src","https://vjs.zencdn.net/7.17.0/video.min.js")
  youtubeScriptEl.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.6.1/Youtube.min.js")
  bodyEl.appendChild(videoScriptEl)
  bodyEl.appendChild(youtubeScriptEl)
});

