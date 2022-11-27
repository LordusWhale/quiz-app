export const questionPage = (question) => {
  return `
<section class="card-container">
    <div class="card">
        <h1>${question.question}</h1>
        <ul>
            ${question.answers
              .map((answer) => {
                return `<li><button class="button answer-btn">${answer}</button></li>`;
              })
              .join("")}
        </ul>
    </div>
</section>
    `;
};

export const resultsPage = (score) => {
    return `
    <section class="results-page">
        <h1>Your final scores is ${score}</h1>
        <label for="initials">Enter your initials</label>
        <input type="text" id="initials" />
        <button class="button" id="submit-score-btn">Submit</button>
    </section>
    `
}

export const scoresListPage = (userScores) => {
    return `
        ${userScores.map(score=>{
            return `<li>${score.initials} - ${score.score}</li>`
        }).join('')}
    `
} 

export const homePage = () => {
    return `
    <section class="home-page">
        <h1>Coding Quiz Challenge</h1>
        <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
        <button class="button" id="start-quiz">Start Quiz</button>
    </section>
    `
}