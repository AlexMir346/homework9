//Задання #1
// console.log(window.getComputedStyle(div).getPropertyValue('margin-left'));

//Задання #2

let hour = 0,
  minutes = 0,
  seconds = 0,
  totalSeconds = 0;

let intervalId = null;

const digHours = document.getElementById('hours');
const digMin = document.getElementById('minutes');
const digSec = document.getElementById('seconds');

function startTimer() {
  ++totalSeconds;
  hour = Math.floor(totalSeconds / 3600);
  minutes = Math.floor((totalSeconds - hour * 3600) / 60);
  seconds = totalSeconds - (hour * 3600 + minutes * 60);

  if (seconds < 10) {
    digSec.innerHTML = `0${seconds}`;
  } else {
    digSec.innerHTML = seconds;
  }
  if (minutes < 10) {
    digMin.innerHTML = `0${minutes}`;
  } else {
    digMin.innerHTML = minutes;
  }
  if (hour < 10) {
    digHours.innerHTML = `0${hour}`;
  } else {
    digHours.innerHTML = hour;
  }
}

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.onclick = () => {
  intervalId = setInterval(startTimer, 1000);
  const divStart = document.querySelector('div');
  divStart.classList.add('green');
};

stopBtn.onclick = () => {
  if (intervalId) clearInterval(intervalId);
  const divStop = document.querySelector('div');
  divStop.classList.remove('green');
  divStop.classList.add('red');
};

resetBtn.onclick = () => {
  const divReset = document.querySelector('div');
  divReset.classList.remove('red');
  divReset.classList.remove('green');
  divReset.classList.add('silver');
  totalSeconds = 0;
  digHours.innerHTML = '00';
  digMin.innerHTML = '00';
  digSec.innerHTML = '00';
  clearInterval(intervalId);
};

//Задання #3
const input = document.createElement('input');
input.placeholder = '+38 000-000-00-00';
document.body.append(input);

const btn = document.createElement('button');
btn.id = 'btn';
btn.innerHTML = 'Save';
document.body.append(btn);

let phonePattern = /\+38 \d{3}-\d{3}-\d{2}-\d{2}/;

btn.onclick = () => {
  if (!validate(phonePattern, input.value)) {
    const div = document.createElement('div');
    div.innerHTML = 'Phone number is incorrect';
    document.body.append(div);
  } else {
    document.body.style.backgroundColor = 'green';
    document.location =
      'https://thumbs.dreamstime.com/b/match-complex-like-puzzle-pictured-as-word-match-puzzle-pieces-to-show-match-can-be-difficult-needs-cooperating-164220917.jpg';
  }
  const hr = document.createElement('hr');
  document.body.append(hr);
};

function validate(regex, inp) {
  return regex.test(inp);
}
