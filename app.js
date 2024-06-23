// const deg = 6;
// const hr = document.querySelector("#hr");
// const mn = document.querySelector("#mn");
// const sc = document.querySelector("#sc");
// setInterval(() => {
//   let date = new Date();
//   let ms = date.getMilliseconds() * deg;
//   let hour = date.getHours() * 30;
//   let min = date.getMinutes() * deg;
//   let sec = date.getSeconds() * deg + ms / 1000;
//   hr.style.transform = `rotateZ(${(hour) +( min / 12)}deg)`;
//   mn.style.transform = `rotateZ(${min})deg`;
//   sc.style.transform = `rotateZ(${sec})deg`;
// }, 1);
const deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();

  let ms = day.getMilliseconds() * deg;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg + ms / 1000;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1);
