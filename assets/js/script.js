// VARIABLES pulled from HTML.
var hideQuiz     = document.getElementById("quiz-questions");
var hideResults  = document.getElementById("quiz-results");
var hideMain     = document.getElementById("welcome");
var showQuiz     = document.getElementById("quiz-questions");
var showAlert    = document.getElementById("correct-wrong");
var showResults  = document.getElementById("quiz-results");
var hideQuiz     = document.getElementById("quiz-questions");
var optionsQuiz  = document.querySelector("#options");
var startQuiz    = document.querySelector("#start");
var initialInput = document.querySelector("#initials");
var finalScore   = document.querySelector("#score");
var submitButton = document.querySelector("#submit");
var timeLeft     = document.querySelector("#time-left");

var quizIndex    = 0;
var interval;

// HIDE quiz section and final score section when page loads.
hideQuiz.style.display    = "none";
hideResults.style.display = "none";



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
        options: ["JavaScript Origin Node",
                  "JavaScript Object Notation",
                  "JavaSays One Name",
                  "JavaSave Only Norm"],
        answer: "2"
    },
    {
        question: "What is the storage method used when passed a key name, will return that key's value?",
        options: ["storage.key()",
                  "storage.clear()",
                  "storage.setItem()",
                  "storage.getItem()"],
        answer: "4"
    },
    {
        question: "What are key methods to use to execute code at specified time intervals?",
        options: ["setTimeout or setInterval",
                  "setTime or setInteger",
                  "clearTimeout or clearInterval",
                  "clearTime or clearInteger"],
        answer: "1"
    },
]

// CREATE a function to showQuestion when start button is clicked
function beginQuiz() {
    startTimer();
    showQuestion();

    // SHOW Quiz Page
    showQuiz.style.display = "block";

    // HIDE Main Page
    hideMain.style.display = "none";
}

// DEFINE a function to showQuestion.
function showQuestion() {
    // Assign question located from "questions" in html
    var question = document.getElementById("questions")

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

// IF an option is clicked, a new question is shown
function updateStats(event) {
    console.log(event.target);
    console.log(event.target.id);

    // TODO: CHECK answers
    // COMPARE chosen answer with an answer key
    if (event.target.id === quiz[quizIndex].answer) {
        // IF correct, alert "CORRECT!"
        console.log(quiz[quizIndex].answer + "CORRECT!");
        showAlert.innerHTML = "CORRECT!"; // NEED to find the proper syntax to make this work

    } else {
        // IF wrong, alert "WRONG!", and subtract 5 from score/time
        console.log(totalSeconds + "Before");

        totalSeconds = totalSeconds - 5;

        console.log(totalSeconds + "After");

        console.log(quiz[quizIndex].answer + "WRONG!");
        showAlert.innerHTML = "WRONG!"; // NEED to find the proper syntax to make this work
    }

    //MOVES index to the next question
    quizIndex++;
    if (quizIndex === quiz.length) {
        stopQuiz();
        return
    }
    showQuestion();
}

function stopQuiz() {
    // SHOW Final Score Page
    showResults.style.display = "block";

    // HIDE Quiz Page
    hideQuiz.style.display = "none";

    // UPDATE FinalScore on the page.
    finalScore.innerHTML = totalSeconds

    // STOP the timer
    stopTimer();
}

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

// CREATE a function when submitting your #initials.
// SAVE and REDIRECT highScore to a new High Score Page
function submitHighScore() {
    var highScores = localStorage.getItem("highScores");

    // IF localstorage for highScores is empty, initialize the quiz again.
    if (highScores === "") {
        highScores = [];
    } else { // ELSE convert the highScores string back into an array.
        highScores = JSON.parse(highScores);
    }

    // CLEAR initialInput list element and update finalScore
    var initialsText = initialInput.value.trim();

    // CREATE a JSON object to keep track of the scores
    var score = {name: initialsText, score: totalSeconds};
    var scoreJSON = JSON.stringify(score);

    console.log(score);
    console.log(scoreJSON);

    // SAVE the new highScore
    highScores.push(scoreJSON);

    console.log(highScores);

    initialInput.value = "";

    localStorage.setItem("highScores", JSON.stringify(highScores));

    location.assign("highscore.html");
}

// ADD .eventListener to 'start' button
startQuiz.addEventListener("click", beginQuiz)

// ADD .eventListener to 'options' button
optionsQuiz.addEventListener("click", updateStats)

// ADD .eventListener to 'submit' button
submitButton.addEventListener("click", submitHighScore)
