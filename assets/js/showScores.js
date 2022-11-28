import { getObjectFromLS, deleteAllLS, deleteObjectFromArray } from "./lib/localStorage.js";
import { scoresListPage } from "./lib/pages.js";
import {quizes} from './data/data.js'
const scoresPage = document.getElementById('scores-page');
const showScoresBtn = document.getElementById('show-scores-btn');
const scoresList = document.getElementById('scores-list');
const goBackBtn = document.getElementById('back-btn');
const clearScoresBtn = document.getElementById('clear-btn');
const changeQuizScore = document.getElementById('quiz-score');



showScoresBtn.onclick = () => {
    scoresPage.style.visibility = "visible";
}
goBackBtn.onclick = () => {
    scoresPage.style.visibility = "hidden";
}
clearScoresBtn.onclick = () => {
    deleteAllLS('score');
    scoresList.innerHTML = "";
}


// Simple observer to check if styles change in score page: If the styles change, the page is open.
const scorePageOpenObserver = new MutationObserver(entries=>{
    entries.forEach(entry=>{
        createScoreList();
        createQuizScoreOption()
    })
})
const createScoreList = (newScores = null) => {
    const currentQuiz = document.documentElement.dataset.quiz;
    scoresList.innerHTML = "";
    let scores = getObjectFromLS('score');
    if (!scores) return;
    if (newScores) scores = newScores;
    if (currentQuiz && !newScores) {  // Used to set scores to the quiz currently being played
        scores = scores.filter((score=>{
            return score.quizId === parseInt(currentQuiz);
        }))
    } 
    if (!newScores && !currentQuiz) { // Used if opening scores for the first time on load
        scores = scores.filter((score)=>{
            return score.quizId === 0;
        })
    }
   
    // Sorting in descending order - highest to lowest
    scores.sort((a, b)=>{
        return b.score-a.score;
    })
    scoresList.innerHTML = "";
    const scoreEls = scoresListPage(scores)
    scoreEls.forEach(el=>{
        scoresList.appendChild(el)
    })
    // Delete single scores
    const deleteBtns = document.querySelectorAll('.delete-score-btn');
    deleteBtns.forEach(btn=>{
        btn.onclick = onDelete;
    })
    newScores = null;
}

const createQuizScoreOption = () => {
    const currentQuiz = document.documentElement.dataset.quiz;
    changeQuizScore.innerHTML = "";
    // Creating options to select scores for quiz
    const options = quizes.map(quiz=>{
        const optionEl = document.createElement('option');
        optionEl.innerText = quiz.title;
        optionEl.setAttribute('value', quiz.id);
        if (quiz.id === parseInt(currentQuiz)) optionEl.setAttribute('selected', true); // Used to default to quiz currently being played
        return optionEl;
    })
    options.forEach(o=>{
        changeQuizScore.appendChild(o)
    })

    changeQuizScore.addEventListener("change", (e)=>{
        const ls = JSON.parse(localStorage.getItem('score'));
        if (!ls) return;
        const quizScores = ls.filter(score=>{
            return score.quizId === parseInt(e.target.value);
        })
        createScoreList(quizScores);
        document.documentElement.setAttribute("data-quiz", e.target.value);

    })
}



const onDelete = (e) => {
    const currentQuiz = document.documentElement.dataset.quiz;
    const id = e.target.dataset.id;
    deleteObjectFromArray('score', id);
    let newScores = getObjectFromLS('score')
    newScores = newScores.filter(item=>{
        return item.quizId === parseInt(currentQuiz);
    })
    createScoreList(newScores);
}

// Observing the scores page.
scorePageOpenObserver.observe(scoresPage, {
    attributes: true,
    attributeFilter: ["style"],
})
