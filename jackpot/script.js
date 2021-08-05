'use strict';

var stopped = true;
var timer = [];
var toppx = [];
var result = []
var startTime, duration = 5000;
document.addEventListener("DOMContentLoaded", () => {
    let startbut = document.querySelector('#start');
    startbut.addEventListener("click", () => {
        if (stopped) {
            let count = 0;
            let columns = document.querySelectorAll('.column');
            let clock = new Date();
            document.querySelector("#start").innerHTML = 'Stop';
            stopped = false;
            toppx.splice(0, toppx.length);
            startTime = clock.getTime();
            columns.forEach((i) => {
                toppx.push(-240);
                let Speed = Math.random() * 3 + 2;
                timer[count] = setInterval((whichcolumn, columnindex, speed) => {
                    whichcolumn.style.top = (toppx[columnindex]) + 'px';
                    toppx[columnindex] += speed;
                    if (toppx[columnindex] >= 0) {
                        let rows = whichcolumn.children;
                        whichcolumn.insertBefore(rows[rows.length - 1], rows[0]);
                        toppx[columnindex] = -240;
                    }
                    let currentTime = new Date().getTime();
                    if (currentTime - startTime >= duration) smoothStop();
                }, 0, i, count, 4);
                count++;
            })
        } else {
            smoothStop();
            stopped = true;
        }
    })
})

function smoothStop() {
    timer.forEach(i => {
        clearInterval(i);
    });
    let count = 0;
    let columns = document.querySelectorAll('.column');
    for (let i = 0; i < columns.length; i++) {
        toppx[i] = Math.floor(toppx[i]);
        if (Math.abs(toppx[i]) % 80 != 0) {
            timer[i] = setInterval((index) => {
                toppx[index] += 1;
                columns[index].style.top = toppx[index] + 'px';
                if (toppx[index] % 80 === 0) {
                    clearInterval(timer[index]);
                    count++;
                    if (count === columns.length)
                        checkJackpot();
                }
            }, 10, i);
        };
    }
    document.querySelector("#start").innerHTML = 'Start';
}

function checkJackpot() {
    let columns = document.querySelectorAll('.column');
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.top = toppx[i] + 'px';
        result[i] = columns[i].children[Math.abs(Math.ceil(toppx[i])) / 80 + 1].textContent;
    }
    if (result.every((val, i, arr) => val === arr[0]))
        window.alert("Congratulation!");
}