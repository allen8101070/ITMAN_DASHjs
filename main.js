let url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
let player = dashjs.MediaPlayer().create();
let videoplayer = document.querySelector("#videoPlayer")

player.initialize(videoplayer , url, true);