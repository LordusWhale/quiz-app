/*
    Default questions, answers could be there own objects with a correct value. 
     Since the page only has one quiz, chose to simply compare the strings.
*/

export const quizes = [
  {
    title: "JavaScript Quiz",
    id: 0,
    questions: [
      {
        question: "Commonly used data types do NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: "Alerts",
      },
      {
        question:
          "The condition in an if/else statement is enclosed with ____.",
        answers: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        correct: "Curly brackets",
      },
      {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
          "Numbers and strings",
          "Other arrays",
          "Booleans",
          "All of the above",
        ],
        correct: "All of the above",
      },
      {
        question:
          "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
        correct: "Quotes",
      },
      {
        question:
          "A very useful tooled used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "Terminal/bash", "For loops", "console.log"],
        correct: "console.log",
      },
    ],
  },
  {
    title: "HTML Quiz",
    id: 1,
    questions: [
      {
        question: "What does HTML stand for?",
        answers: [
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Text Markup Language",
        ],
        correct: "Hyper Text Markup Language",
      },
      {
        question: "Who is making the web standards?",
        answers: [
          "The World Wide Web Consortium",
          "Google",
          "Mozilla",
          "Microsoft",
        ],
        correct: "The World Wide Web Consortium",
      },
      {
        question: "Choose the correct HTML element for the largest heading:",
        answers: ["<h6>", "<heading>", "<h1>", "<head>"],
        correct: "<h1>",
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<br>", "<lb>"],
        correct: "<br>",
      },
      {
        question: "What is the correct HTML for making a checkbox?",
        answers: [
          "<input type='check'>",
          "<input type='checkbox'>",
          "<checkbox>",
          "<check>",
        ],
        correct: "<input type='checkbox'>",
      },
      {
        question: "What is the correct HTML for adding a background color?",
        answers: [
          "<body bg='yellow>'",
          "<background>yellow></background>",
          "<body style='background-color:yellow;>",
        ],
        correct: "<body style='background-color:yellow;>",
      },
    ],
  },
  {
    title: "CSS Quiz",
    id: 2,
    questions: [
      {
        question: "What does CSS stand for?",
        answers: [
          "Colorful Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
        ],
        correct: "Cascading Style Sheets",
      },
      {
        question:
          "What is the correct HTML for referring to an external style sheet?",
        answers: [
          '<link rel="stylesheet" type="text/css" href="mystyle.css">',
          '<style src="mystyle.css">',
          "<stylesheet>mystyle.css</stylesheet>",
        ],
        correct: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      },
      {
        question:
          "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
          'At the end of the document',
          'In the <head> section',
          "In the <body> section",
        ],
        correct: 'In the <head> section',
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: ["<script>", "<style>", "<css>"],
        correct: "<style>"
      }
      
    ],
  },
];
