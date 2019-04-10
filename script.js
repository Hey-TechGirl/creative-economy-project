const video_list = ["protografer-1672801", "acting-backstage-preparation", "draw-1086533", "paint-video-1970039", "music-guitar-players-1109", "music-street-vienna-13394", "ballet-373", "coding-laptop-1625"];
let video_count = 0;

function videoLoop(){
  const player = document.getElementById("player");
  const video_loop = document.getElementById("loop-videos");
  video_loop.defaultPlaybackRate = 0.7;
  video_count += 1;
  if (video_count > video_list.length - 1){
    video_count = 0;
  };
  player.src = "video/" + video_list[video_count] + ".mp4";

  video_loop.load();
  video_loop.play();
}
