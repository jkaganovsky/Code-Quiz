// VARIABLES to pull from html
var startQuiz    = document.querySelector("#start");
var initialInput = document.querySelector("#initials");
var finalScore   = document.querySelector("#score");
var submitButton = document.querySelector("#submit");
var timeLeft     = document.getElementById("time-left")
var quizIndex    = 0;
var highScores   = [];
var interval;


// CREATE a function to display each container
// https://www.w3schools.com/jsref/event_onpagehide.asp
// function displayOutput() {
//     var container = document.getElementsByClassName("container");

//     if (container.style.display === "none") {
//         container.style.display = "block";
//     } else {
//         container.style.display = "none";
//     }
//     console.log(container);
// }

// render displayOutput();

// CREATE a function with an array of variable questions
var quiz = [
    {
        question: "What is DOM?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "What is JSON?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "What is DOM?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "What is DOM?",
        options: ["Decree Operation Manual",
                  "Document Object Manual",
                  "Document Object Model",
                  "Direct Object Model"],
        answer: "Document Object Model"
    },
]



// CREATE a function to showQuestion
function beginQuiz() {
    startTimer();
    // Assign question located from "questions" in html
    var question = document.getElementById("questions")

    // Assign text to show on H1
    question.innerHTML = quiz[quizIndex].question;

    // Get element buttons from html
    // TODO: Consider to change into a for loop
    var optionA = document.getElementById("1");
    var optionB = document.getElementById("2");
    var optionC = document.getElementById("3");
    var optionD = document.getElementById("4");

    // Assign text to show on buttons
    optionA.innerHTML = quiz[quizIndex].options[0];
    optionB.innerHTML = quiz[quizIndex].options[1];
    optionC.innerHTML = quiz[quizIndex].options[2];
    optionD.innerHTML = quiz[quizIndex].options[3];




        console.log(question);
        console.log(options);

}

// SET and START timer
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
        resetTime();
    }
}


// SAVE and REDIRECT highScore to a new High Score Page
function submitHighScore() {
    // CLEAR initialInput list element and update finalScore
    var initialsText = initialInput.value.trim();

    console.log(initialsText);

    highScores.push(initialsText);
    initialInput.value = "";

    localStorage.setItem("highScores", highScores);

    window.location.href = "highscore.html"
    // finalScore.textContent = initialInput;
}

// ADD .eventListener to 'submit' button
submitButton.addEventListener("click", submitHighScore)

// ADD .eventListener to 'start' button
startQuiz.addEventListener("click", beginQuiz)