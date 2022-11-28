import { getObjectFromLS, deleteAllLS, deleteObjectFromArray } from "./lib/localStorage.js";
import { scoresListPage } from "./lib/pages.js";

const scoresPage = document.getElementById('scores-page');
const showScoresBtn = document.getElementById('show-scores-btn');
const scoresList = document.getElementById('scores-list');
const goBackBtn = document.getElementById('back-btn');
const clearScoresBtn = document.getElementById('clear-btn');




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
    })
})
const createScoreList = () => {
    scoresList.innerHTML = "";
    let scores = getObjectFromLS('score');
    if (!scores) return;
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
}

const onDelete = (e) => {
    const id = e.target.dataset.id;
    deleteObjectFromArray('score', id);
    createScoreList();
}

// Observing the scores page.
scorePageOpenObserver.observe(scoresPage, {
    attributes: true,
    attributeFilter: ["style"],
})
