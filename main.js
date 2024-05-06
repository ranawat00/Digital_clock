const hour =document.getElementById("hour");
const minute =document.getElementById("minute");
const second =document.getElementById("second");
const ampm =document.getElementById("ampm");

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

function isAmPm(hours){
  return hours >=12 ?"PM" : "AM";

}

function clock(){
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  hour.textContent = formatTime(h);
  minute.textContent = formatTime(m);
  second.textContent = formatTime(s);
  ampm.textContent = isAmPm(h);
}

setInterval(clock,1000);
