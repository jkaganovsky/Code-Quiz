// VARIABLES to pull from html

// HIDE quiz section and final score section when page loads.
var hideQuiz = document.getElementById("quiz-questions");
var hideResults = document.getElementById("quiz-results");

hideQuiz.style.display = "none";
hideResults.style.display = "none";


var startQuiz    = document.querySelector("#start");
var quizIndex    = 0;

// CREATE a function with an array of variable questions
var quiz = [
    {
        question: "What is DOM?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "3"
    },
    {
        question: "What is JSON?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "2"
    },
    {
        question: "Q3?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "4"
    },
    {
        question: "Q4?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "1"
    },
]

// CREATE a function to showQuestion when start button is clicked
function beginQuiz() {
    startTimer();
    showQuestion();

    // SHOW Quiz Page
    var showQuiz = document.getElementById("quiz-questions")

    showQuiz.style.display = "block";

    // HIDE Main Page
    var hideMain = document.getElementById("welcome")

    hideMain.style.display = "none";
}

// ADD .eventListener to 'start' button
startQuiz.addEventListener("click", beginQuiz)

// DEFINE a function to showQuestion.
function showQuestion() {
    // Assign question located from "questions" in html
    var question = document.getElementById("questions")
    console.log("quizIndex: " + quizIndex);
    // Assign text to show on H1
    question.textContent = quiz[quizIndex].question;

    // Get element buttons from html
    var optionA = document.getElementById("1");
    var optionB = document.getElementById("2");
    var optionC = document.getElementById("3");
    var optionD = document.getElementById("4");

    // Assign text to show on buttons
    optionA.textContent = quiz[quizIndex].options[0];
    optionB.textContent = quiz[quizIndex].options[1];
    optionC.textContent = quiz[quizIndex].options[2];
    optionD.textContent = quiz[quizIndex].options[3];
}

var optionsQuiz  = document.querySelector("#options");

// IF an option is clicked, a new question is shown
function updateStats(event) {
    console.log(event.target);
    console.log(event.target.id);

    quizIndex++;    //Moves index to the next question
    if (quizIndex === quiz.length) {
        stopQuiz();
        return
    }
    showQuestion();
}

// ADD .eventListener to 'options' button
optionsQuiz.addEventListener("click", updateStats)

function stopQuiz() {
    // SHOW Final Score Page
    var showResults = document.getElementById("quiz-results");

    showResults.style.display = "block";

    // HIDE Quiz Page
    var hideQuiz = document.getElementById("quiz-questions");

    hideQuiz.style.display = "none";

    // UPDATE FinalScore on the page.
    finalScore.innerHTML = totalSeconds

    // STOP the timer
    stopTimer();
}

var interval;

// SET, START, RESET, and STOP timer
function startTimer() {
    resetTime();
    interval = setInterval(function() {
        totalSeconds--;
        renderTime();
      }, 1000);
}

function resetTime() {
    clearInterval(interval);
    totalSeconds = 75;
}

var timeLeft     = document.querySelector("#time-left");

function renderTime() {
    timeLeft.innerHTML = totalSeconds

    if (totalSeconds === 0){
        stopQuiz();
    }
}

function stopTimer() {
    clearInterval(interval);
    renderTime();
}

// TODO: Create a function when submitting your #initials.
var initialInput = document.querySelector("#initials");
var finalScore   = document.querySelector("#score");
var submitButton = document.querySelector("#submit");
var highScores   = [];

// SAVE and REDIRECT highScore to a new High Score Page
function submitHighScore() {
    // CLEAR initialInput list element and update finalScore
    var initialsText = initialInput.value.trim();

    console.log(initialsText);

    highScores.push(initialsText);

    initialInput.value = "";

    finalScore.textContent = initialInput;

    location.assign("highscore.html");

    localStorage.setItem("highScores", highScores);
}

// ADD .eventListener to 'submit' button
submitButton.addEventListener("click", submitHighScore)





// FUNCTION to set when an answer is clicked
// ALERT when answer is right or wrong
// function optionsButton(event) {
//     var optionsClickContent = event.target.textContent;
//     var optionsValueContent = event.target.getAttribute("quiz", quizIndex)
//     event.target.matches("button")

//     // CREATE a function to display each .container on their own page
//     let selectedBtn;

//     optionsQuiz.onclick = function(event) {
//         let optionsClickContent = event.target.textContent;
//         if (target.textContent != quiz['answer'],
//             alert("CORRECT!")
// }

