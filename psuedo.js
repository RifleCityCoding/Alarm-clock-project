// Set the variables for clock and buttons

// Need a functional clock variable
const currentTime = document.querySelector("h1");

//
const content = document.querySelector(".content");
//Menu selectors for time
const timeMenu = document.querySelectorAll("select");
// Alarm button
const setAlarm = document.querySelector("button");

//Is the alarm set
let isAlarmSet = false;

// Drop downs need numbers to choose from


// Hour button choice
for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    timeMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
// Minutes
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    timeMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

// AM or PM
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    timeMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
} 

// Make the clock work with function
function whatTime(){
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

}; 

setInterval(whatTime, 1000);

// Need a function for setting an alarm

function createAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        setAlarm.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${timeMenu[0].value}:${timeMenu[1].value} ${timeMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please set an alarm");
    }

    alarmTime = time;
    isAlarmSet = true;
    setAlarm.innerText = "Clear Alarm";
}

setAlarm.addEventListener("click", createAlarm);

//Need it to let us know
/*
function (checkAlarm) {
    if (currentTime === alarmTime){
        window.alert("It's time to get up!");
    }
};
*/

