$(document).ready(function () {
    //work timer variables
    var displaySessionTime = $('#session_time_display');
    var sessionTime = 25;
    var sessionSeconds = sessionTime * 60;
    var setSessionTime = $('#session_time');


    //break timer variables
    var displayBreakTime = $('#break_time_display');
    var breakTime = 5;
    var breakSeconds = breakTime * 60;
    var setBreakTime = $('#break_time');

    var timer;


    //display time
    var displayTime = function (seconds) {
        if (seconds < 60) {
            seconds = ('0' + seconds).slice(-2);
            return '00:' + seconds;
        }
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        seconds = ('0' + remainingSeconds).slice(-2);
        minutes = ('00' + minutes).slice(-2);
        return minutes + ":" + seconds;
    };


    //set default clock times
    setSessionTime.html(sessionTime);
    setBreakTime.html(breakTime);
    displaySessionTime.html(displayTime(sessionSeconds));
    displayBreakTime.html(displayTime(breakSeconds));

    //plus and mius buttons
    $('#session_plus').click(function () {
        if (sessionTime > 0) {
            sessionTime++;
        }
        sessionSeconds = sessionTime * 60;
        setSessionTime.html(sessionTime);
        displaySessionTime.html(displayTime(sessionTime * 60));
    });

    $('#session_mius').click(function () {
        if (sessionTime > 1) {
            sessionTime--;
        }
        sessionSeconds = sessionTime * 60;
        setSessionTime.html(sessionTime);
        displaySessionTime.html(displayTime(sessionTime * 60));
    });

    $('#break_plus').click(function () {
        if (breakTime > 0) {
            breakTime++;
        }
        breakSeconds = breakTime * 60;
        setBreakTime.html(breakTime);
        displayBreakTime.html(displayTime(breakTime * 60));
    });

    $('#break_mius').click(function () {
        if (breakTime > 1) {
            breakTime--;
        }
        breakSeconds = breakTime * 60;
        setBreakTime.html(breakTime);
        displayBreakTime.html(displayTime(breakTime * 60));
    });


    //start session time function
    var startSessionTimer = function () {
        var counter = 0;
        timer = setInterval(function () {
            counter++;
            displaySessionTime.html(displayTime(sessionSeconds));
            if (sessionSeconds < 1) {
                resetTimer();
                startBreakTimer();
                sessionSeconds = counter;
            }
            sessionSeconds--;
        }, 1000);
    };


    //start break time function
    var startBreakTimer = function () {
        var counter = 0;
        timer = setInterval(function () {
            counter++;
            displayBreakTime.html(displayTime(breakSeconds));
            if (breakSeconds < 1) {
                resetTimer();
                startSessionTimer();
                breakSeconds = counter;
            }
            breakSeconds--;
        }, 1000);
    };


    //start button
    $('#start').click(function () {
        if (timer === undefined) {
            startSessionTimer();
        }
    });



    //reset button
    $('#reset').click(function () {

        resetTimer();
        displaySessionTime.html(displayTime(sessionTime * 60));
        displayBreakTime.html(displayTime(breakTime * 60));
    });


    //resetTimer function
    var resetTimer = function () {
        clearInterval(timer);
        timer = undefined;
    };



})