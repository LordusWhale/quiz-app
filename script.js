const startQuizBtn = document.getElementById('start-quiz');
const time = document.getElementById('time');


let timer;
let currentTime = 75;
const startTimer = () => {
    timer = setInterval(()=>{
        currentTime --;
        time.innerText = currentTime;
    }, 1000)
}

startQuizBtn.onclick = start;