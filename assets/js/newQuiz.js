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


// <li>JavaScript Quiz<button class="play-quiz-btn" data-id="0">Play</button></li>
const playQuizButtons = quizes.map(quiz=>{
    const li = document.createElement('li');
    li.innerHTML = quiz.title;
    const button = document.createElement('button');
    button.innerText = "play";
    button.addEventListener('click', (e)=>{
        quizPageContainer.style.visibility = 'hidden';
        startQuiz(e, quiz);
    })
    li.appendChild(button);
    return li;
})

playQuizButtons.forEach(btn=>{
    ul.appendChild(btn)
})

