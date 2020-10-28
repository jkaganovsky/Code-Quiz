// VARIABLES to pull from html
var startQuiz = document.querySelector("#start")
// var initialInput = document.querySelector("#initials")

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
// CREATE function to beginQuestion
function showQuestion() {
    var question1 = document.getElementById("questions")

    question1.innerHTML = "What is a DOM?";

    var answer1 = document.getElementById("1");

    answer1.innerHTML = "1. Decree Operation Manual";

    var answer2 = document.getElementById("2");

    answer2.innerHTML = "2. Document Object Manual";

    var answer3 = document.getElementById("3");

    answer3.innerHTML = "3. Document Object Model"

    var answer4 = document.getElementById("4");

    answer4.innerHTML = "4. Direct Object Model"

        console.log(question1);
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);
}

// ADD .eventListener to 'start' button
startQuiz.addEventListener("click", showQuestion)