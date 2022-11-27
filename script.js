import { questions } from "./data.js";
import { questionPage } from "./pages.js";

const startQuizBtn = document.getElementById('start-quiz');
const time = document.getElementById('time');
const timeContainer = document.getElementById('time-container');
const main = document.querySelector('main');


let timer;
let currentTime = 75;
let pageIndex = 0;


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
    main.innerHTML = questionPage(questions[pageIndex]);
    const answerBtns = document.querySelectorAll('.button.answer-btn');
    answerBtns.forEach(btn=>{
        btn.addEventListener('click', answerBtnClick);
    })
}


const answerBtnClick = (e) => {
    if (e.target.innerHTML !== questions[pageIndex].correct) currentTime -=10;
    pageIndex ++;
    showQuizPage();


}


startQuizBtn.onclick = startQuiz;