import { createAudio } from './common.js'


const timeInput = document.getElementById('time1');
const timeOutput = document.getElementById('time2');

const start = document.getElementById('start');
const stop = document.getElementById('stop');

let clicks = false;

let val;
let timerId;

start.addEventListener('click', function () {
    if (clicks === false) {
        timerId = setInterval(function () {
            val = parseInt(timeInput.value);
            document.getElementById('time1').value = --val;
            let minutes = Math.floor(val / 60);
            let seconds = val % 60;
            timeOutput.innerHTML = `${minutes}:${seconds}`;
            if (val == 0) {
                clearInterval(timerId);
                createAudio();
            }
        }, 1000);
        clicks = true;
    }
});

stop.addEventListener('click', function () {
    clearInterval(timerId);
    clicks = false;
});

