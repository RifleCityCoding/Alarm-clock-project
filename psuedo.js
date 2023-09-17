// Set the variables for clock and buttons

// Need a functional clock variable
const currentTime = document.querySelector("h1"),

//
content = document.querySelector(".content"),
//Menu selectors for time
timeMenu = document.querySelectorAll("select"),
// Alarm button
setAlarm = document.querySelector("button");

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
setInterval(() => {
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

}); 
// Need a function for setting an alarm

function createAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        createAlarm.innerText = "Set Alarm";
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