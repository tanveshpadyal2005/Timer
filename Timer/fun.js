let timerInterval;
let timer = 0;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        timerInterval = setInterval(function () {
            timer++;
            displayTimer();
        }, 1000);
        isTimerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

function resetTimer() {
    stopTimer();
    timer = 0;
    displayTimer();
}

function displayTimer() {
    const timerElement = document.getElementById("timer");
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
