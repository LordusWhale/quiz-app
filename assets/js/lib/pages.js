/*
    Pages used for each section of the quiz. Used to allow for potential future additions such as creating your own quiz.
*/



export const questionPage = (question) => {
    const section = document.createElement('section')
    section.classList.add('card-container');
    section.classList.add('observe');
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h1');
    title.innerText = question.question;

    const ul = document.createElement('ul');

    const questions = question.answers.map(q=>{
        const newLi = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add("button")
        button.classList.add('answer-btn');
        button.innerText = q;
        newLi.appendChild(button);
        return newLi;
    })
    questions.forEach(q=>{
        ul.appendChild(q);
    })

    card.appendChild(title);
    card.appendChild(ul);
    section.appendChild(card);

    return section;
};

export const resultsPage = (score) => {
    return `
    <section class="results-page">
        <h1>Your final score is ${score}</h1>
        <label for="initials">Enter your initials</label>
        <input type="text" id="initials" />
        <button class="button" id="submit-score-btn">Submit</button>
    </section>
    `
}

export const scoresListPage = (userScores) => {
    const scoreElements = userScores.map(score=>{
        const li = document.createElement('li');
        li.innerText = `${score.initials} - ${score.score}`;
        li.classList.add('observe'); // Observer class used for animations
        const button = document.createElement('button');
        button.classList.add('delete-score-btn');
        button.setAttribute('data-id', score.id) // Used data attribute to delete by id
        button.innerText = "Delete";

        li.appendChild(button);

        return li;
    })

    return scoreElements;
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