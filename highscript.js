var $highScorer = document.querySelector("#highScorer")
var $clearButtonSpot= document.querySelector("#clearButton")

// Recieving local storage item
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

// To cycle through highscores and list them.
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var $newLi = document.createElement("li");
        $newLi.textContent = "Intials: " + allScores[i].initials + " " + "| Score: " + allScores[i].score;
        $highScorer.appendChild($newLi);
    }
}


// creating a clear button
var $clearButton = document.createElement("input");
$clearButton.setAttribute("type", "reset");
$clearButton.setAttribute("class", "btn btn-danger");
$clearButton.setAttribute("value", "Clear");$clearButtonSpot.appendChild($clearButton);


// Making Clear button function
$clearButton.addEventListener("click",function(){
    localStorage.clear();
    window.location.href = "highscore.html";
});