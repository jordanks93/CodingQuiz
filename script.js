var question = document.querySelector("#questionText");
var details = document.querySelector("#details");
var startButton = document.querySelector("#startButton");
var answerList = document.querySelector("#answerList");
var timeLeft = document.querySelector("#timeLeft")
var highscoresButton = document.querySelector("#highscores")
var enterScore = document.querySelector("#enterScore");
var showIfCorrect = document.querySelector("#showIfCorrect");
var count;
var qCounter = 0;
var highscores = [];

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

// renders answers to the screen
// checks the question number and pulls correct answer array to create list elements 
function renderAnswers(num) {

    for (i = 0; i < answers1.length; i++) {
        var li = document.createElement("li");
        var button = document.createElement("button");
        if (num === 0) {
            button.textContent = answers1[i];
            li.setAttribute("data-index", i); // attach attribute to each answer button to help determine if answer is correct later

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
}

// checks if answer is correct and substracts from score if wrong
// Corrent Answers: 3 2 4 3 4
// Data-Index: 2 1 3 2 3
function checkAnswer(index) {

    var lineBreak = document.createElement("hr");
    var text = document.createElement("p");

    if ((qCounter === 1 && index == 2) || (qCounter === 2 && index == 1) || (qCounter === 3 && index == 3) || (qCounter === 4 && index == 2) || (qCounter === 5 && index == 3)) {

        text.textContent = "Correct!";
        showIfCorrect.appendChild(lineBreak);
        showIfCorrect.appendChild(text);
    }

    else {

        text.textContent = "Incorrect";
        showIfCorrect.appendChild(lineBreak);
        showIfCorrect.appendChild(text);
        count += -10;
    }
}

// Clears elements so page can be re-rendered
function clearElements() {

    while (answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);
    }
    while (enterScore.firstChild && enterScore.firstChild.textContent != "Go Back") {
        enterScore.removeChild(enterScore.firstChild);
    }
    while (showIfCorrect.firstChild) {
        showIfCorrect.removeChild(showIfCorrect.firstChild);
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

    clearElements();
    var text = document.createElement("label");
    var input = document.createElement("input");
    var submit = document.createElement("button");

    text.textContent = "Enter initials:"
    question.textContent = "All done!";
    details.textContent = "Your final score is " + count + ".";
    submit.textContent = "Submit";

    enterScore.appendChild(text);
    enterScore.appendChild(input);
    enterScore.appendChild(submit);
}

// Creates page with list of highscores that can be cleared. Also has go back button to reset quiz
function renderHighscore() {
    var goBack = document.createElement("button");
    var clearHighscore = document.createElement("button");

    clearElements();
    highscoresButton.style.display = 'none'; // hides highscores button after click
    question.textContent = "Highscores";
    details.textContent = "";
    goBack.textContent = "Go Back";
    clearHighscore.textContent = "Clear Highscores";

    // make sure count has been defined before adding to the array
    if (count != null) {
        highscores[highscores.length] = count;
    }

    console.log(highscores);
    storeHighscore();

    for (i = 0; i < highscores.length; i++) {
        var highscore = document.createElement("li");

        highscore.textContent = highscores[i];

        answerList.appendChild(highscore);
    }
    enterScore.appendChild(goBack);
    enterScore.appendChild(clearHighscore);
}

// Sets timer for quiz
function timer() {
    var timeInterval = setInterval(function () {
        count--;
        timeLeft.textContent = "Time(seconds): " + count;

        if (count === 0 || qCounter == questions.length) {
            clearInterval(timeInterval);
            renderEnterScore();
        }

    }, 1000)
}

function storeHighscore() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function pullHighscores() {
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    if (storedHighscores !== null) {
        highscores = storedHighscores;
    }
}

// Check for answer button click
answerList.addEventListener("click", function (event) {
    var element = event.target;
    var index = element.parentElement.getAttribute("data-index");

    // Answer click transitions to next question
    if (element.matches("button") === true && qCounter < questions.length - 1) {
        qCounter++;
        clearElements();
        renderQuestion(qCounter);
        checkAnswer(index);
        console.log(answerList);
    }

    // Once user gets to last question, clicking asnswer will take user to enter score
    else if (element.matches("button") === true && qCounter < questions.length) {
        qCounter++;
        checkAnswer(index);
        clearElements();
        renderEnterScore();
    }

});

// Checks button click for submitting a score, go back (refresh), and clearing highscores
enterScore.addEventListener("click", function (event) {
    var element = event.target;

    // If user clicks submit, transition to highscore screen
    if (element.matches("button") === true && element.textContent === "Submit") {
        pullHighscores();
        renderHighscore();
    }

    // If user clicks Go Back, reloads page
    else if (element.matches("button") === true && element.textContent === "Go Back") {
        location.reload();
    }
    // If user clicks clear highscores, clears highscore list elements and clears local storage
    else if (element.matches("button") === true && element.textContent === "Clear Highscores") {
        clearElements();
        localStorage.clear();
    }
})

// Start quiz
startButton.addEventListener("click", function () {

    count = 75;
    renderQuestion(0);
    timer();
    startButton.style.display = 'none'; //hides atart button after click

});

// Takes user to highscore list
highscoresButton.addEventListener("click", function (event) {

    event.preventDefault();
    pullHighscores();
    startButton.style.display = 'none'; //hides start button after click
    highscoresButton.style.display = 'none'; // hides highscores button after click
    renderHighscore();

})






