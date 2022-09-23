function changeTitle(newTitle) {
    document.title = newTitle;
}

const orig_title = document.title;
function onCountdown() {
    isTimer = false;
    isCountdown = !isCountdown;
    if (isCountdown) {
        document.getElementById("countdown-div").classList.remove("hidden");
    } else {
        document.getElementById("countdown-div").classList.add("hidden");
    }
    document.getElementById("timer-div").classList.add("hidden");
}
function onTimer() {
    isCountdown = false;
    isTimer = !isTimer;
    if (isTimer) {
        document.getElementById("timer-div").classList.remove("hidden");
    } else {
        document.getElementById("timer-div").classList.add("hidden");
    }
    document.getElementById("countdown-div").classList.add("hidden");
}


var isCountdown = false;
var isTimer = false;


var mins = 2;
var initial_mins = mins; 
var secs = mins * 60;
function initCountdown() {
    mins = (document.getElementById("c-minutes").value != document.getElementById("placeholder").value) 
            ? document.getElementById("c-minutes").value 
            : 2;
    secs = (document.getElementById("c-seconds").value != document.getElementById("placeholder").value) 
            ? document.getElementById("c-seconds").value 
            : mins * 60;

    isTimer = false;
    isCountdown = true;
    setTimeout('Countdown()', 60);
}
function Countdown() {
    if (document.getElementById && !isTimer) {
        minutes = document.getElementById("c-minutes");
        seconds = document.getElementById("c-seconds");

        if (seconds < 59) {
            seconds.value = secs;
        } else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }


        if (mins < (initial_mins / 2)) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        
        if (mins < 0) {
            document.getElementsByClassName("countdown").value = "Time over"
            minutes.value = 0;
            seconds.value = 0;
        } else {
            secs--;
            if (isCountdown) {
                setTimeout('Countdown()', 1000);
            }
        }
    }
}







function initTimer() {
    mins = (document.getElementById("t-minutes").value != document.getElementById("placeholder").value) 
            ? document.getElementById("t-minutes").value 
            : 2;
    secs = (document.getElementById("t-seconds").value != document.getElementById("placeholder").value) 
            ? document.getElementById("t-seconds").value 
            : mins * 60;
    isTimer = true;
    isCountdown = false;
    setTimeout('Timer()', 60);
}
function Timer() {
    if (document.getElementById && !isCountdown) {
        minutes = document.getElementById("t-minutes");
        seconds = document.getElementById("t-seconds");

        if (seconds < 59) {
            seconds.value = secs;
        } else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        
        if (mins < 0) {
            minutes.value = 0;
            seconds.value = 0;
        } else {
            secs++;
            if (isTimer) {
                setTimeout('Timer()', 1000);
            }
        }
    }
}








function stop() {
    isTimer = false;
    isCountdown = false;
    document.getElementById("timer-div").classList.add("hidden")
    document.getElementById("countdown-div").classList.add("hidden")
    mins = 0;
    secs = 0;
}

function pause() {
    isTimer = false;
    isCountdown = false;
}

function getminutes() {
    mins = Math.floor(secs / 60);
    if (isCountdown || isTimer) {
        changeTitle(mins + ":" + secs +  " - " + orig_title);
    }
    return mins;
}

function getseconds() {
    if (isCountdown || isTimer) {
        changeTitle(mins + ":" + (secs - Math.round(mins * 60)) + " - " + orig_title);
    }
    return secs - Math.round(mins * 60);
}

