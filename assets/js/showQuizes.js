const showPageBtn = document.getElementById('show-created-quiz-btn');
const goBackBtn = document.getElementById('go-back-btn');
const createQuizBn = document.getElementById('create-quiz');
const quizContainer = document.querySelector('.created-quiz-page');
const createQuizContainer = document.querySelector('.create-quiz');
const showQuizContainer = document.querySelector('.show-created-quiz')
showPageBtn.onclick = () => {
    quizContainer.style.visibility = "visible"
}
goBackBtn.onclick = () => {
    quizContainer.style.visibility = "hidden"
}

createQuizBn.onclick = () => {
    showQuizContainer.style.display = "none";
    createQuizContainer.style.display = "flex"
}



