
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 70;
let countdown;

//questions array
const quizArray = [
    {
        id: "0",
        question: "Which of the following attribute is used to provide a unique name to an element?",
        options: ["class", "id", "type", "None of the above"],
        correct: "id",
      },
      {
        id: "1",
        question: "Which of the following HTML attribute is used to define inline styles?",
        options: ["style", "type", "class", "None of the above"],
        correct: "style",
      },
      {
        id: "2",
        question: "A program in HTML can be rendered and read by?",
        options: ["Web browser", "Server", "Interpreter", "None of the above"],
        correct: "Web browser",
      },
      {
        id: "3",
        question: " Which of the following is the paragraph tag in HTML?",
        options: ["<p>", "<b>", "<pre>", "None of the above"],
        correct: "<p>",
      },
      {
        id: "4",
        question: "The tags in HTML are ?",
        options: ["case-sensitive", "in upper case", "not case sensitive", "in lowercase"],
        correct: "not case sensitive",
      },
    ];
    