// RETRIEVE highScores from localStorage
var highScores = localStorage.getItem("highScores")

// RENDER a new li for each initialInput created
var scoreList = document.querySelector("#high-score-list")

console.log(highScores);
console.log(scoreList);

for (var i = 0; i < 1; i++) {

        var li = document.createElement("li");
        li.textContent = highScores;
        // li.setAttribute("", i);
        scoreList.appendChild(li);
    }

// TODO: CLEAR highScores

// TODO: GO BACK to main page