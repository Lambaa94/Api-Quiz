// input intials.. make sure its only 2 characters long
// alert if more than two characters
// reprompt

// add captured score to name with concat
// add newScore to array that displays in box


var $highScorer = document.querySelector("#highScorer")
var $clearButtonSpot= document.querySelector("#clearButton")

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var $newLi = document.createElement("li");
        $newLi.textContent = allScores[i].initials + " " + allScores[i].score;
        $highScorer.appendChild($newLi);
    }
}

var $clearButton = document.createElement("input");
$clearButton.setAttribute("type", "reset");
$clearButton.setAttribute("class", "btn btn-danger");
$clearButton.setAttribute("value", "Clear");

$clearButtonSpot.appendChild($clearButton);

$clearButton.addEventListener("click",function(){
    localStorage.clear();
    window.location.href = "highscore.html";
});