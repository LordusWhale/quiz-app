const startQuizBtn = document.getElementById('start-quiz');
const time = document.getElementById('time');
const timeContainer = document.getElementById('time-container');
const main = document.querySelector('main');


let timer;
let currentTime = 75;
const startTimer = () => {
    timeContainer.style.visibility = "visible";
    timer = setInterval(()=>{
        currentTime --;
        time.innerText = currentTime;
    }, 1000)
}


const startQuiz = () => {
    startTimer();
    showQuizPage();
}

const showQuizPage = () => {
    main.inner
}


startQuizBtn.onclick = startQuiz;