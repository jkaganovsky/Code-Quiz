// RETRIEVE highScores from localStorage.
var highScores = localStorage.getItem("highScores");

// CHANGE highScores back from a string of text into an array.
var highScoresArray = JSON.parse(highScores);

// RENDER a new li for each initialInput created
var scoreList = document.querySelector("#high-score-list")

console.log(highScores);
console.log(highScoresArray);
console.log(scoreList);

// CREATE a list of highScores using a for loop.
for (var i = 0; i < highScoresArray.length; i++) {

    // CONVERT the highScores array element back into a JSON object.
    highScoresObj = JSON.parse(highScoresArray[i]);

    // CREATE a list element in HTML.
    var li = document.createElement("li");

    // ADD text to the li element to show on the page.
    li.innerHTML = highScoresObj.name + " - " + highScoresObj.score;

    // ADD the new li text to the ol element in HTML.
    scoreList.appendChild(li);
}

// CLEAR highScores
var clearButton = document.querySelector("#clearscrn");
var clearList = document.querySelector("#high-score-list")

// PERFORM the function to clearHighScore.
function clearHighScore() {
    localStorage.setItem("highScores", "");
    clearList.innerHTML = "";
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

