const gameTimeEl = document.getElementById("timer");
var startButtonEl = document.getElementById("btn-start");
var quizInfoEl = document.getElementById("quiz-info");
var questionZone = document.getElementById("question-zone");
var timeEl = 60;
var questionArr = [
    {
        question: "What syntax is used to insert JavaScript into HTML?",
        choice: ["<script>", "<javascript>", "<scripting>", "<js>"],
        answer: 0
    },

    {
        question: "Which of these correctly written comments in JavaScript?",
        choice: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/", "'//This is a comment' and '/*This is a comment*/' are correct"],
        answer: 3
    },

    {
        question: "What is the syntax for referring to an external script called 'xxx.js'?",
        choice: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "None of these"],
        answer: 0
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choice: ["alert('Hello World');", "msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');"],
        answer: 0
    },

    {
        question: "How do you call a function named 'myFunction'?",
        choice: ["myFunction()", "call myFunction()", "call function myFunction()", "call.function.myFunction()"],
        answer: 0
    }
]


var timerStart = function() {
    quizInfoEl.remove();

};