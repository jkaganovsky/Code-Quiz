// RETRIEVE highScores from localStorage
var highScores = localStorage.getItem("highScores")

// RENDER a new li for each initialInput created
var scoreList = document.querySelector("#high-score-list")

console.log(highScores);
console.log(scoreList);

for (var i = 0; i < 1; i++) {

        var li = document.createElement("li");
        li.textContent = highScores;
        scoreList.appendChild(li);
    }

// TODO: CLEAR highScores
var clearButton = document.querySelector("#clearscrn");

// PERFORM the function to clearHighScore.
function clearHighScore() {
    localStorage.setItem("highScores", "");
    scoreList.removeChild(li);
}

// ADD .eventListener to #clearscrn
clearButton.addEventListener("click", clearHighScore)

// TODO: GO BACK to main page.
var goBackButton = document.querySelector("#goback");

// PERFORM the function to goBack to the main page.
function goBack() {
    location.assign("index.html");
}

// ADD .eventListener to Go Back button
goBackButton.addEventListener("click", goBack)

