// script.js

let timer = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');
let lapBtn = document.getElementById('lap-btn');
let lapTimes = document.getElementById('lap-times');

let hours = 0;
let minutes = 0;
let seconds = 0;
let lapCount = 0;
let intervalId;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        timer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

function pauseTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapCount = 0;
    timer.textContent = '00:00:00';
    lapTimes.innerHTML = '';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function recordLap() {
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCount + 1}: ${timer.textContent}`;
    lapTimes.appendChild(li);
    lapCount++;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}