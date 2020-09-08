var count = 5
var totalCount = 60
var score = 0
// Timers
var $timerEl = document.querySelector("#timer");
var $quizTimerEl = document.querySelector("#quizTimer");
var $quizTitleEl = document.querySelector(".quizTitle");
var $timerTitleEl = document.querySelector("#quizTimer")
// Quiz Display
var quizDisplay = document.querySelector(".questionContainer")
// Questions and Choices
var $questionTitleEl = document.querySelector("#questionTitle");
var $questionOneEl = document.querySelector("#a1");
var $questionTwoEl = document.querySelector("#a2");
var $questionThreeEl = document.querySelector("#a3");
var $questionFourEl = document.querySelector("#a4");

// Buttons
var $startButtonEl = document.querySelector("#startButton")
var $allBtnsEl = document.querySelectorAll(".answerBtn")

// Which question we are on
var questionProgressIndex = 0;

// Array of Questions
var questions = [
    {
        questionTitle: "What is a way to print things in the console?",

        a1: "console.log()",
        a2: "document.write()",
        a3: "alert()",
        a4: "All The Above",
        correctAnswer: "D",


    },
    {
        questionTitle: "What is JavaScript?",

        a1: "An ancient language",
        a2: "A programming language",
        a3: "A starbucks coffee size",
        a4: "A famous poet",
        correctAnswer: "B",


    },
    {
        questionTitle: "What are strings indicated by?",

        a1: "Quotations",
        a2: "Square Brackets",
        a3: "Curly Brackets",
        a4: "Plus Signs",
        correctAnswer: "A",


    },
    {
        questionTitle: "What is a Variable keyword?",

        a1: "pet",
        a2: "net",
        a3: "let",
        a4: "char",
        correctAnswer: "C",


    },
    {
        questionTitle: "What is the Comparison Operator for equal to?",

        a1: "  ===",
        a2: "  ====",
        a3: "  :",
        a4: "All The Above",
        correctAnswer: "A",


    },
    {
        questionTitle: "What is the Comparison Operator for inequality?",

        a1: "!==",
        a2: "-=",
        a3: "!notEqual",
        a4: "A and C",
        correctAnswer: "D",


    },
    {
        questionTitle: "What is the Logical Operator for and",

        a1: "+",
        a2: "&",
        a3: "&&",
        a4: "@",
        correctAnswer: "C",


    },
    {
        questionTitle: "Access 'Dog' in the Array: var pets = ['Cat','Dog','Lizard','Monkey']",

        a1: "pets[0]",
        a2: "pets[1]",
        a3: "pets[2]",
        a4: "pets[3]",
        correctAnswer: "B",


    },
    {
        questionTitle: "What is a Function?",

        a1: "A fun party",
        a2: "A way to choose which block of code to run based on whether a condition is true or false.",
        a3: "A named piece of code that executes only when called.",
        a4: "A way to run a block of code over and over a set number of times",
        correctAnswer: "C",


    },
    {
        questionTitle: "Brendan Eich is the creator of JavaScript. What year did he create it?",

        a1: "1990",
        a2: "1995",
        a3: "2000",
        a4: "2003",
        correctAnswer: "B",


    },
    {
        questionTitle:"",
        a1:"",
        a2:"",
        a3:"",
        a4:"",
        correctAnswer:""
    }


];

// Start Button
$startButtonEl.addEventListener("click", function () {
    quizCountdown();
});
// Countdown till quiz start
function quizCountdown() {
    var countdownTimer = setInterval(function () {
        count--;
        $timerEl.textContent = count;
        console.log("hey")
        if (count === 0) {
            $timerEl.textContent = "";
            $quizTitleEl.textContent = "";
            quizTimer();
            clearInterval(countdownTimer);

        }

    }, 1000);

};
// Quiz Timer
function quizTimer() {
    var timerInterval = setInterval(function () {
        totalCount--;
        $quizTimerEl.textContent = totalCount;
        // console.log("wasssipip")
        if (questionProgressIndex === questions.length - 1) {
            clearInterval(timerInterval)
            $timerTitleEl.textContent = "";
            quizDisplay.textContent = "";
            $quizTitleEl.style.display = "none";
            $quizTimerEl.textContent = "";
            gameOver();
        }

        if (totalCount === 0) {
            clearInterval(timerInterval)
            $quizTimerEl.textContent = "";
            $timerTitleEl.textContent = "";
            $quizTitleEl.textContent = "";
            quizDisplay.textContent = "";
            gameOver();

        }

    }, 1000);

    quizQuestions();
};
// Click!!
for (var i = 0; i < $allBtnsEl.length; i++) [
    $allBtnsEl[i].addEventListener("click", function (event) {
        console.log(event.target.id);
        checkAnswer();

    })
]


// The Main Quiz
function quizQuestions() {

    $startButtonEl.style.display = "none"
    quizDisplay.style.display = "block"
    quizDisplay.setAttribute("class", "card")
    var q = questions[questionProgressIndex];
    questionTitles.innerHTML = "<p>" + q.questionTitle + "</p>";
    a1.innerHTML = q.a1;
    a2.innerHTML = q.a2;
    a3.innerHTML = q.a3;
    a4.innerHTML = q.a4;

}

// Checking if the answer is correct and moving on to the next question.
function checkAnswer() {
    var answer = event.target.id;

    // the answer is the same as the correctAnswer
    if (answer === questions[questionProgressIndex].correctAnswer) {
        answerIsCorrect();

    }
    else {
        answerIsWrong();
    }
    if (questionProgressIndex < questions.length - 1) {
        questionProgressIndex++;
        quizQuestions();
    }
    else {
        gameOver();
        $quizTitleEl.textContent = "";
        quizDisplay.textContent = "";
        $quizTimerEl.textContent = "";

    }
}
// Correct
function answerIsCorrect() {
    score++;
}
// Wrong
function answerIsWrong() {
    totalCount - 9;
}



// Game Over
function gameOver() {


    var totalScore = score + totalCount

    alert("Game Over. Your quiz score is " + totalScore);
    var $gameOverText = document.createElement("text");
    $gameOverText.setAttribute("id", "gameOverText");
    $gameOverText.setAttribute("class", "h4")
    $gameOverText.textContent = "-"

    quizDisplay.appendChild($gameOverText)

    var $createUserSentence = document.createElement("label");
    $createUserSentence.setAttribute("id", "createUserInput");
    $createUserSentence.setAttribute("class", "h4")
    $createUserSentence.textContent = "Enter your initials: ";

    quizDisplay.appendChild($createUserSentence);

    var $createUserInput = document.createElement("input");
    $createUserInput.setAttribute("class", "text");
    $createUserInput.setAttribute("id", "initials");
    $createUserInput.textContent = "Game Over. Your quiz score is " + totalScore;


    quizDisplay.appendChild($createUserInput)

    var $submitButton = document.createElement("input");
    $submitButton.setAttribute("type", "submit");
    $submitButton.setAttribute("class", "btn btn-primary");
    $submitButton.setAttribute("value", "Submit");

    quizDisplay.appendChild($submitButton)

    $submitButton.addEventListener("click", function () {
        var initials = $createUserInput.value

        if (initials === null) {
            console.log("Initials not recorded")
        } else {
            var finalScore = {
                initials: initials,
                score: totalScore
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);

            }
            allScores.push(finalScore)
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore)
            window.location.href = "highscore.html"
        }

    })




};






    // $allBtnsEl.addEventListener("click", function (){
//     var answer = 
//     checkAnswer();
//     console.log(click.event.target);
// )};

// document.getElementsByClassName("answerBtn").addEventListener("click", event.target);

    // var newQuest = document.createElement("p");
// newQuest.textContent = (questions)[i];
// $questionTitleEl.appendChild(newQuest);


// for (var i = 0; i < questions.length; i++) {
//     console.log($questionTitleEl.children)



//     document.getElementById("questionTitle").setAttribute("question")[0];



//     startQuiz();
//     for (var i = 0; i < questions.length; i++) {
//         var i = document.createElement("ul");
//         g.setAttribute('id', question[i]);
//         document.body.appendChild(g);
//     }
//     function startQuiz() {
//         document.getElementById("questionTitle")[i];

//     }

//     for (var i = 0; i < $allBtnsEl.length; i++) {
//         $allBtnsEl[i].addEventListener("click", function (event) {
//             console.log(event.target)
//         }
// if (event.target.id === correctAnswer) {
//             questions++;
//             if (event.target.id !== correctAnswer) {
//                 totalCount - 5;
//             }
//         }


//         questionContainer.addEventListener("click", function (event) {
//             var questionPlace = event.target;
//             if (questionPlace.matches("answerBtn"))

//                 var node = document.createElement("li");
//             var textnode = document.createTextNode(questions.questionTitle);
//             node.appendChild(textnode);
//             document.getElementById("questionTitle").appendChild(node); 

// if (questionProgressIndex = questions.length)
//            $quizTitleEl.textContent = ""