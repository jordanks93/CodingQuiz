var question = document.querySelector("#questionText");
var details = document.querySelector("#details");
var startButton = document.querySelector("#startButton");
var answerList = document.querySelector("#answerList");
var timer = document.querySelector("#timer")
var highscoresButton = document.querySelector("#highscores")
var enterScore = document.querySelector("#enterScore");
var count = 75;
var score = 0;
var qCounter = 0;

var questions =
    ["Commonly used types of data DO NOT include:"
        , "The condition in an if / else statement is enclosed within ______."
        , "Arrays in Javascript can be used to store ______."
        , "String values must be enclosed within _____ when being assigned to variables."
        , "A very useful tool used during development and debugging for printing content to the debugger is:"
    ];

var answers1 = ["strings", "booleans", "alerts", "numbers"];
var answers2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var answers3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var answers4 = ["commas", "curly brackets", "quotes", "parentheses"];
var answers5 = ["Javascript", "terminal/ bash", "for loops", "console log"];


// Click start button to begin quiz
// A timer starts and a question is presented
// Select answer
// Present another question
// Answer incorrectly, subtract seconds from timer
// When all questions are answered or time = 0, game over
// When game is over, can save initials and score

function renderAnswers(num) {
    for (i = 0; i < answers1.length; i++) {
        var li = document.createElement("li");
        var button = document.createElement("button");
        if (num === 0) {
            button.textContent = answers1[i];
            li.setAttribute("data-index", i);

            li.appendChild(button);
            answerList.appendChild(li);
        }
        else if (num === 1) {
            button.textContent = answers2[i];
            li.setAttribute("data-index", i);

            li.appendChild(button);
            answerList.appendChild(li);
        }
        else if (num === 2) {
            button.textContent = answers3[i];
            li.setAttribute("data-index", i);

            li.appendChild(button);
            answerList.appendChild(li);
        }
        else if (num === 3) {
            button.textContent = answers4[i];
            li.setAttribute("data-index", i);

            li.appendChild(button);
            answerList.appendChild(li);
        }
        else if (num === 4) {
            button.textContent = answers5[i];
            li.setAttribute("data-index", i);

            li.appendChild(button);
            answerList.appendChild(li);
        }
    }
    console.log(answerList.childElementCount);
}

// Clear answers so they can be replaced when renderAnswers is called
function clearAnswers() {
    while (answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);
    }
}

// Renders question based on number given
function renderQuestion(qNum) {
    //Clear default text
    details.textContent = "";

    // Render question text from array
    question.textContent = questions[qNum];

    // Render answer text from array
    renderAnswers(qNum);
}

// Creates page for player to enter score
function renderEnterScore() {
    clearAnswers();
    var input = document.createElement("input");
    var submit = document.createElement("button");

    question.textContent = "All done!";
    details.textContent = "Your final score is " + score + ".";
    input.value = "Enter Initials";
    submit.textContent = "Submit";

    enterScore.appendChild(input);
    enterScore.appendChild(submit);
}

// Creates page with list of highscores that can be cleared. Also has go back button to reset quiz
function renderHighscore() {

}

// Check for answer button click
answerList.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true && qCounter < questions.length - 1) {
        qCounter++;
        clearAnswers();
        renderQuestion(qCounter);
        console.log(answerList);
    }
    else {
        renderEnterScore();
    }


});

// Start quiz
startButton.addEventListener("click", function () {
    timer.textContent += count;
    renderQuestion(0);
    startButton.style.display = 'none'; //hides atart button after click
});




console.log(question.textContent);




