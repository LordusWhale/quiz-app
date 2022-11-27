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
