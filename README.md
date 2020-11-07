# Project Name: Coding Quiz

### Description: Provide the use a timed quiz on JavaScript fundamentals that stores high scores. User will have 75 seconds to answer 5 multiple choice questions. If the user answers a question incorrectly their score/time will be deducted by 10. After the quiz is complete a highscore can be stored.

#List of JS methods and listeners

* renderAnswers()
  * display answer buttons on the screen
  * checks the question number(qCounter) and pulls correct answer array (answers1..5) to create answer list elements
  * attaches data-index attribute to each answer button, used to help determine correct answer later

* checkAnswer()
  * checks if correct answer was selected based on button data-index
  * subtract from score if answer is wrong

* clearElements()
  * clears elements so page can be re-rendered

* renderQuestion(qNum)
  * displays question based on number given (qCounter)
  * calls renderAnswer to display answers for that question

* renderEnterScore()
  * displays page for user to enter score

* renderHighScore()
  * displays page with list of highscores that can be cleared
  * displays "go back" button to go to start screen
  * will display highscores from local storage if available via storeHighscore
  
* timer()
  * handles timer for quiz
  * take user to enter score screen if time runs out

* storeHighscore()
  * stores highscore in local storage

* pullHighscores()
  * pulls highscores from storage if available

* answerList.addEventListener
  * check for answer button click
  * once user gets to last question, clicking asnswer will take user to enter score

* enterScore.addEventListener
  * checks button click for submitting a score, go back (refresh), and clearing highscores
  
* startButton.addEventListener
  * starts quiz
  * sets timer count
  * hides start button

* highscoresButton.addEventListener
  * takes user to highscore list
  * hides start and highscores button after click
  
## Visual:
![Default Page]()

![Output Page]()

[Gitpages Link](https://jordanks93.github.io/CodingQuiz/)


## Author: 
Jordan Stuckman
