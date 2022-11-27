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