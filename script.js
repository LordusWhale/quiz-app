const startQuizBtn = document.getElementById('start-quiz');
const time = document.getElementById('time');
const timeContainer = document.getElementById('time-container');

let timer;
let currentTime = 75;
const startTimer = () => {
    timeContainer.style.visibility = "visible";
    timer = setInterval(()=>{
        currentTime --;
        time.innerText = currentTime;
    }, 1000)
}

startQuizBtn.onclick = startTimer;