var btn_heart = document.getElementById("myheart");
var video_log = document.querySelector(".video-log");
video_log.classList.remove('video-log');
btn_heart.addEventListener("click", function() {
  video_log.classList.add('video-log');
})