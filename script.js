const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function displayTime() {
  const date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;


  hr.style.transform = `rotate(${hRotation}deg)`
  min.style.transform = `rotate(${mRotation}deg)`
  sec.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayTime, 1000)