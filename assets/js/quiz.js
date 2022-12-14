import {quizes} from "./data/data.js";
import { homePage, questionPage, resultsPage } from "./lib/pages.js";
import { addObjectToArrayLS } from "./lib/localStorage.js";
import { showError, sleep, createID } from "./lib/functions.js";
import { animateCard } from "./lib/animations.js";

let startQuizBtn = document.getElementById("start-quiz");
const time = document.getElementById("time");
const timeContainer = document.getElementById("time-container");
const mainContainer = document.querySelector("main");

// Default variables
let currentTime;
let pageIndex; // Used to iterate through questions array
let timer;
let questions; 
let quizId; // Used to bind score to specific quiz
const timerFunctions = {
  startTimer: () => {
    // Showing timer in HTML and subtracting one every second
    timeContainer.style.visibility = "visible";
    timer = setInterval(() => {
      currentTime--;
      if (currentTime === 0) {
        // End quiz if time is 0
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
// Start of quiz, called when pressing start quiz on main page
export const startQuiz = (e, newQuiz = null) => {
  resetGame();
  if (newQuiz){
    questions = newQuiz.questions
    quizId = newQuiz.id;
  } else {
    questions = quizes[0].questions;
    quizId = quizes[0].id;
  }
  document.documentElement.setAttribute("data-quiz", quizId);
  timerFunctions.startTimer();
  showQuizPage();
};

function resetGame(){
  pageIndex = 0;
  currentTime = 75;
  timerFunctions.stopTimer();
}




const showQuizPage = () => {
  mainContainer.innerHTML = ""
  mainContainer.appendChild(questionPage(questions[pageIndex])); // Showing the questions to the main page
  animateCard(mainContainer.children[0]);
  // Getting answer buttons and adding event listeners to check if correct
  const answerBtns = document.querySelectorAll(".button.answer-btn");
  answerBtns.forEach((btn) => {
    btn.addEventListener("click", answerBtnClick);
  });
};

const answerBtnClick = async (e) => {
  disableButtons();
  showCorrectAnswer();
  timerFunctions.pauseTimer(); // Pausing timer to not change score when showing results
  await sleep(1000);
  timerFunctions.startTimer();
  await sleep(500);
  // Compares text value of button with correct value of question
  if (e.target.innerText !== questions[pageIndex].correct)  {
    currentTime -= 10;
    if (currentTime <= 0){
      currentTime = 0;
      endQuizPage()
    }
  } 
  pageIndex++; // Changing to next question
  if (!questions[pageIndex]) {
    // If no more questions stop quiz
    endQuizPage();
    return;
  }
  showQuizPage();
};

const disableButtons = () => {
  // Disables answer buttons
  const allButtons = document.querySelectorAll(".button.answer-btn");
  allButtons.forEach((button) => {
    button.setAttribute("disabled", "true");
  });
};
const showCorrectAnswer = () => {
  const allButtons = document.querySelectorAll(".button.answer-btn");
  allButtons.forEach((button) => {
    
    if (button.innerText !== questions[pageIndex].correct) { 
      button.style.backgroundColor = "red";
    } else {
      button.style.backgroundColor = "green";
    }
  });
};

const endQuizPage = () => {
  // End of quiz function, stopping timer and showing results page
  timerFunctions.stopTimer();
  mainContainer.innerHTML = resultsPage(currentTime);
  const submitScoreBtn = document.getElementById("submit-score-btn");
  submitScoreBtn.onclick = submitScore;
};

const submitScore = async (e) => {
  //Saving score to local storage, resetting game variable and showing main page
  const initials = document.getElementById("initials").value;
  if (initials.length < 2) {
    await showError("Enter more than two letters");
  } else {
    const newScore = { initials, score: currentTime, id: createID("score"), quizId};
    addObjectToArrayLS("score", newScore);
    mainContainer.innerHTML = homePage();
    const scoresPage = document.getElementById("scores-page");
    scoresPage.style.visibility = "visible";
    startQuizBtn = document.getElementById("start-quiz");
    // Resetting start button
    startQuizBtn.onclick = startQuiz;
  }
};

startQuizBtn.onclick = startQuiz;
