const router = require('express').Router();
require("dotenv").config()


router.get("/:title", async (req,res)=>{
  const title = req.params.title

  const apiKey = process.env.API_KEY;
  const baseUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet";
  const url =
    baseUrl +
    "&q=" +
    encodeURIComponent(title) +
    "trailer&key=" +
    apiKey +
    "&type=video";

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        return res.json({message: "trailer not found"});
      }
      return response.json();
    })
    .then(function (data) {
      const trailer = `https://www.youtube.com/embed/${data.items[0].id.videoId}?autoplay=1&mute=1`;
      return res.json(trailer);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
})

