import { getObjectFromLS, deleteAllLS } from "./localStorage.js";
import { scoresListPage } from "./pages.js";

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



const scorePageOpenObserver = new MutationObserver(entries=>{
    entries.forEach(entry=>{
        scoresList.innerHTML = "";
        let scores = getObjectFromLS('score');
        if (!scores) return;
        scores.sort((a, b)=>{
            return b.score-a.score;
        })
        scoresList.innerHTML = scoresListPage(scores);
    })
})


scorePageOpenObserver.observe(scoresPage, {
    attributes: true,
    attributeFilter: ["style"],
})
