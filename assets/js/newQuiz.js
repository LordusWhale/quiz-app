import {quizes} from "./data/data.js"
import { startQuiz } from "./quiz.js";

const ul = document.getElementById('quiz-list');
const quizPageContainer = document.querySelector('.quiz-page')
const goBackBtnQuiz = document.getElementById('back-btn-quiz');
const showQuizesBtn = document.getElementById('show-quizes-btn');



showQuizesBtn.onclick = () => {
    quizPageContainer.style.visibility = 'visible';
}

goBackBtnQuiz.onclick = () => {
    quizPageContainer.style.visibility = 'hidden';
}


// Adding a play button for every quiz
const playQuizButtons = quizes.map(quiz=>{
    const li = document.createElement('li');
    li.innerHTML = quiz.title;
    const button = document.createElement('button');
    button.innerText = "play";
    button.addEventListener('click', (e)=>{
        quizPageContainer.style.visibility = 'hidden';
        startQuiz(e, quiz); // Starting game on click
    })
    li.appendChild(button);
    return li;
})

playQuizButtons.forEach(btn=>{
    ul.appendChild(btn)
})

