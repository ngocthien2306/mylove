var btn = document.getElementById("myheart");
var video_log = document.getElementsByClassName("video-log")[0];
var btn_close = document.getElementById("btn-close");

btn.addEventListener("click", function() {
  video_log.classList.remove("hidden");
})
btn_close.addEventListener("click", function() {
  video_log.classList.add("hidden");
})
const yourDate = new Date("2020-07-25T00:00:00");
var day = document.querySelector(".day");
var daylove = document.querySelector(".day-love");
var time = document.querySelector(".time");
day.textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24);
daylove.textContent =  "Hai trái tim cùng nhịp " +`${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
function oclock() {
  var today = new Date();
  hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
  min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
  sec =  Math.floor((today - yourDate) / 1000) % 60;
  year = (Math.floor(Math.floor((today - yourDate) /1000/60/60/24/365)));
  month = (Math.floor(Math.floor((today - yourDate) /1000/60/60/24/30%12)));
  week = (Math.floor(Math.floor((today - yourDate) /1000/60/60/24%365%30)/7));
  day = (Math.floor(Math.floor((today - yourDate) /1000/60/60/24%365%30)% (week * 8)));

  time.textContent = `${year} năm ${month} tháng ${week} tuần ${day} ngày ` + `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
  var timer = setInterval(function() {oclock()}, 1000);
}
oclock();
console.log(day);



