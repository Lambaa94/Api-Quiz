var count = 5
var totalCount = 60
var penalty = 10
var createUl = document.createElement("ul")
var questionIndex = 0 

var $timerEl = document.querySelector("#timer");
var $quizTimerEl = document.querySelector("#quizTimer");
var $quizTitleEl = document.querySelector(".quizTitle");
var $questionTitleEl = document.querySelector("#questionContainer");
var $startButtonEl = document.querySelector("#startButton")

var $questionOneEl = document.querySelector("#a1");
var $questionTwoEl = document.querySelector("#a2");
var $questionThreeEl = document.querySelector("#a3");
var $questionFourEl = document.querySelector("#a4");

var $allBtnsEl = document.querySelectorAll(".answerBtn")
var questions = [
    {
        questionTitle: "What is a way to print things in the console?",

        a1: "console.log()",
        a2: "document.write()",
        a3: "alert()",
        a4: "All The Above",
        correctAnswer: "All The Above",


    },
    {
        questionTitle: "What is JavaScript?",

        a1: "An ancient language",
        a2: "A programming language",
        a3: "A starbucks coffee size",
        a4: "A famous poet",
        correctAnswer: "A programming language",


    },
    {
        questionTitle: "What are strings indicated by?",

        a1: "Quotations",
        a2: "Square Brackets",
        a3: "Curly Brackets",
        a4: "Plus Signs",
        correctAnswer: "Quotations",


    },
    {
        questionTitle: "What is a Variable keyword?",

        a1: "pet",
        a2: "net",
        a3: "let",
        a4: "char",
        correctAnswer: "let",


    },
    {
        questionTitle: "What is the Comparison Operator for equal to?",

        a1: "===",
        a2: "====",
        a3: ":",
        a4: "All The Above",
        correctAnswer: "===",


    },
    {
        questionTitle: "What is the Comparison Operator for inequality?",

        a1: "!==",
        a2: "-=",
        a3: "!notEqual",
        a4: "A and C",
        correctAnswer: "A and C",


    },
    {
        questionTitle: "What is the Logical Operator for and",

        a1: "+",
        a2: "&",
        a3: "&&",
        a4: "@",
        correctAnswer: "&&",


    },
    {
        questionTitle: "Access 'Dog' in the Array: var pets = ['Cat','Dog','Lizard','Monkey']",

        a1: "pets[0]",
        a2: "pets[1]",
        a3: "pets[2]",
        a4: "pets[3]",
        correctAnswer: "pets[1]",


    },
    {
        questionTitle: "What is a Function?",

        a1: "A fun party",
        a2: "A way to choose which block of code to run based on whether a condition is true or false.",
        a3: "A named piece of code that executes only when called.",
        a4: "A way to run a block of code over and over a set number of times",
        correctAnswer: "A named piece of code that executes only when called.",


    },
    {
        questionTitle: "Brendan Eich is the creator of JavaScript. What year did he create it?",

        a1: "1990",
        a2: "1995",
        a3: "2000",
        a4: "2003",
        correctAnswer: "1995",


    },


];



$startButtonEl.addEventListener("click", function () {
    quizCountdown();
});

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

function quizTimer() {
    var timerInterval = setInterval(function () {
        totalCount--;
        $quizTimerEl.textContent = totalCount;
        // console.log("wasssipip")
        if (totalCount === 0) {
            $quizTimerEl.textContent = "0";
            gameOver();
            clearInterval(timerInterval);


        }
        quizQuestions();
    }, 1000);


};

function gameOver() {
    alert("Game Over");
    window.location.href = "highscore.html"

};

function quizQuestions() {



}



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


// $questionTitleEl.innerHTML = "";
// createUl.innerHTML = "";

// for (var i = 0; i < questions.length; i++) {
//     var mainQuestion = questions[questionIndex].questionTitle;
//     var userAnswer = questions[questionIndex].a1;
//     $questionTitleEl.textContent = mainQuestion

// console.log("we here")
// }

