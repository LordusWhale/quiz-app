/*
    Default questions, answers could be there own objects with a correct value. 
     Since the page only has one quiz, chose to simply compare the strings.
*/

export const questions = [
  {
    question: "Commonly used data types do NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with ____.",
    answers: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    correct: "Curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    correct: "All of the above",
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    correct: "Quotes",
  },
  {
    question: "A very useful tooled used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "Terminal/bash", "For loops", "console.log"],
    correct: "console.log",
  },

];
export const HTMLquestions = [
  {
    question: 'What does HTML stand for?',
    answers: ['Hyperlinks and Text Markup Language', "Home Tool Markup Language", "Hyper Text Markup Language"],
    correct: "Hyper Text Markup Language"
  }, 
  {
    question: 'Who is making the web standards?', 
    answers: ["The World Wide Web Consortium", "Google", "Mozilla", "Microsoft"],
    correct: 'The World Wide Web Consortium'
  }, 
  {
    question: "Choose the correct HTML element for the largest heading:",
    answers: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: "<h1>"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<break>", "<br>", "<lb>"],
    correct: "<br>"
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    answers: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
    correct: "<input type='checkbox'>"
  },
  {
    question: "What is the correct HTML for adding a background color?",
    answers: ["<body bg='yellow>'", "<background>yellow></background>", "<body style='background-color:yellow;>"],
    correct: "<body style='background-color:yellow;>"
  }
]