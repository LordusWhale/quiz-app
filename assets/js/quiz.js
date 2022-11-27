import { questions } from "./data/data.js";
import { homePage, questionPage, resultsPage } from "./lib/pages.js";
import { addObjectToArrayLS } from "./lib/localStorage.js";

let startQuizBtn = document.getElementById("start-quiz");
const time = document.getElementById("time");
const timeContainer = document.getElementById("time-container");
const mainContainer = document.querySelector("main");

let currentTime = 75;
let pageIndex = 0;
let timer;
const timerFunctions = {
  startTimer: () => {
    timeContainer.style.visibility = "visible";
    timer = setInterval(() => {
      currentTime--;
      if (currentTime === 0) {
        stopTimer();
        endQuizPage();
        return;
      }
      time.innerText = currentTime;
    }, 1000);
  },
  pauseTimer: () => {
    clearInterval(timer);
  },
  stopTimer: () => {
    timeContainer.style.visibility = "hidden";
    time.innerText = "";
    clearInterval(timer);
  },
};


const startQuiz = () => {
  timerFunctions.startTimer();
  showQuizPage();
};

const showQuizPage = () => {
  mainContainer.innerHTML = questionPage(questions[pageIndex]);
  const answerBtns = document.querySelectorAll(".button.answer-btn");
  answerBtns.forEach((btn) => {
    btn.addEventListener("click", answerBtnClick);
  });
};

const answerBtnClick = async (e) => {
  disableButtons();
  showCorrectAnswer();
  timerFunctions.pauseTimer();
  await new Promise((r) => setTimeout(r, 1000));
  timerFunctions.startTimer();
  await new Promise(r=>setTimeout(r, 500));
  if (e.target.innerHTML !== questions[pageIndex].correct) currentTime -= 10;
  pageIndex++;
  if (!questions[pageIndex]) {
    endQuizPage();
    return;
  }
  showQuizPage();
};

const disableButtons = () => {
  const allButtons = document.querySelectorAll(".button.answer-btn");
  allButtons.forEach((button) => {
    button.setAttribute("disabled", "true");
  });
};
const showCorrectAnswer = () => {
  const allButtons = document.querySelectorAll(".button.answer-btn");
  allButtons.forEach((button) => {
    if (button.innerHTML !== questions[pageIndex].correct) {
      button.style.backgroundColor = "red";
    } else {
      button.style.backgroundColor = "green";
    }
  });
};

const endQuizPage = () => {
  timerFunctions.stopTimer();
  mainContainer.innerHTML = resultsPage(currentTime);
  const submitScoreBtn = document.getElementById("submit-score-btn");
  submitScoreBtn.onclick = submitScore;
};

const submitScore = (e) => {
  const initials = document.getElementById("initials").value;
  const newScore = { initials, score: currentTime };
  addObjectToArrayLS("score", newScore);
  resetVariables();
  mainContainer.innerHTML = homePage();
  const scoresPage = document.getElementById("scores-page");
  scoresPage.style.visibility = "visible";
  startQuizBtn = document.getElementById("start-quiz");
  startQuizBtn.onclick = startQuiz;
};

function resetVariables() {
  pageIndex = 0;
  currentTime = 75;
}

startQuizBtn.onclick = startQuiz;
