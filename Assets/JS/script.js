var secondsLeft = 121;
var timeEl = document.querySelector("#time");
var startButtonEl = document.querySelector(".start-button");
var highScoresLink = document.querySelector("#high-scores");
var headerImage = document.querySelector("#header-img");
var headingEl = document.querySelector("#main-content-head");
var triviaImg = document.querySelector(".trivia-img")
var subContentEl = document.querySelector("#sub-content");
var mainContentEl = document.querySelector(".main-content");
var questionEl = document.querySelector("#question-head");

var buttonsEl = document.querySelector(".button-div");
var displayAnswerEl = document.querySelector(".answer");
var nextQEl = document.querySelector(".next-div");
// var userScore = localStorage.getItem("user-score");
// var userInitials = localStorage.getItem("initials");

// var scoreTable = document.querySelector(".table-body");

var highScores = JSON.parse(localStorage.getItem("highScores",)) || [];
var maxHighScores = 5;

// var button1El = document.querySelector("#button1");
// var button2El = document.querySelector("#button2");
// var button3El = document.querySelector("#button3");
// var button4El = document.querySelector("#button4");
// var nextBtn = document.querySelector('#next');
// var finishBtn = document.querySelector('#finish');
// var answerEl = document.querySelector("#answer");
var index = 0;
var reduceTimer = false;
var score = 0;
var finishQuiz = false;


var question1 = {
    question: "How many times did Ross get divorced?",
    choice1: "One",
    choice2: "Two",
    choice3: "Three",
    choice4: "Four",
    answer: function() {
        return this.choice3;
     } 
};

var question2 = {
    question: "Joey played Dr. Drake Ramoray on which soap opera show?",
    choice1: "Days of Our Lives",
    choice2: "Nights of Our Lives",
    choice3: "Days and Nights of our Lives",
    choice4: "We had the Time of Our Lives",
    answer: function() {
       return this.choice1;
    }
};

var question3 = {
    question: "Phoebe's scientist boyfriend worked in what city?",
    choice1: "Russia",
    choice2: "Moscow",
    choice3: "Minsk",
    choice4: "Omsk",
    answer: function() {
        return this.choice3;
     }
};

var question4 = {
    question: "What is Chandler Bing's middle name?",
    choice1: "Martha",
    choice2: "Muriel",
    choice3: "Marie",
    choice4: "Mary",
    answer: function() {
        return this.choice2;
     }
};

var question5 = {
    question: "Monica categorizes her towels in how many categories?",
    choice1: "Five",
    choice2: "Twenty",
    choice3: "Eleven",
    choice4: "Nine",
    answer: function() {
        return this.choice3;
     }
};

var question6 = {
    question: "Phoebe attempts to teach Joey what language?",
    choice1: "English",
    choice2: "French",
    choice3: "Dutch",
    choice4: "Italian",
    answer: function() {
        return this.choice2;
     }
};

var question7 = {
    question: "Who was Monica's first kiss?",
    choice1: "Ross",
    choice2: "Chandler",
    choice3: "Joey",
    choice4: "Richard",
    answer: function() {
        return this.choice1;
     }
};

var question8 = {
    question: "What holiday does Chandler hate?",
    choice1: "Halloween",
    choice2: "Christmas",
    choice3: "Earth Day",
    choice4: "Thanksgiving",
    answer: function() {
        return this.choice4;
     }
};

var question9 = {
    question: "Where did Ross and Rachel have their first date?",
    choice1: "The coffee house",
    choice2: "Monica's apartment",
    choice3: "The planetarium",
    choice4: "A restaurant",
    answer: function() {
        return this.choice3;
     }
};

var question10 = {
    question: "What ingredient did Rachel mistakingly put in her Thanksgiving trifle?",
    choice1: "Lady fingers",
    choice2: "Fish",
    choice3: "Brocolli",
    choice4: "Beef",
    answer: function() {
        return this.choice4;
     }
};

var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
// var questionBankCopy = questionBank.slice();
// var counter = questionBank.length + 1;
if(document.querySelector('.start-button')) {  
startButtonEl.addEventListener("click", removeIntroPage);
startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", questionPopUp);
}
// nextBtn.addEventListener("click", questionPopUps);

function removeIntroPage() {
    subContentEl.setAttribute("class", "hidden");
    startButtonEl.remove();
    triviaImg.setAttribute('class', 'hidden');
    highScoresLink.textContent = "Restart Quiz";
    highScoresLink.setAttribute('href','index.html');
    headerImage.setAttribute('class', 'visible');

};

function setTime() {

var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft ;

    if(reduceTimer === true) {
        secondsLeft -= 15;
        reduceTimer = false;
        clearInterval(timerInterval);
        setTime();
    }

    if(finishQuiz === true) {
        clearInterval(timerInterval);
        timeEl.textContent = "";
    }

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "";
        timesUpMessage();
    }
}
, 1000)
};

function timesUpMessage() {

    questionEl.remove();
    buttonsEl.remove();
    displayAnswerEl.remove();
    nextQEl.remove();
    headerImage.setAttribute('class', 'hidden');
    triviaImg.setAttribute('class', 'visible');
    triviaImg.setAttribute('src', 'Assets/JPEGs/times-up.jpg');
    // button1El.remove();
    // button2El.remove();
    // button3El.remove();
    // button4El.remove();
    // answerEl.remove();
    // nextBtn.remove();

    headingEl.setAttribute("class", "visible");
    headingEl.textContent = "Whoops! Your time is up...";
    subContentEl.setAttribute("class", "visible");
    subContentEl.textContent = "Your score is " + score;
    setTimeout(endOfQuiz, 5000);


}

// function questionPopUps() {
    
    // button1El.setAttribute.disabled = false;
    // button2El.setAttribute.disabled = false;
    // button3El.setAttribute.disabled = false;
    // button4El.setAttribute.disabled = false;
    // setTimeout(questionPopUp, 1000);
    // questionPopUp();
    // checkAnswer();
    // counter--;
    // if (counter === 0) {
    //         endOfQuiz();
    //         finishQuiz = true;
    //     };
    

    // calculateScore();

    // if (increaseScore == true) {
    //     score ++;
    //     increaseScore == false;
    // }
    // console.log("This is the score:")
    // console.log(score);
    
    // setTimeout(spliceAndCheck, 0500);

    
// };
function shuffleArray() {
    for (var i = questionBank.length-1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [questionBank[i], questionBank[j]] = [questionBank[j], questionBank[i]]
        questionBank.join('');
    }

        console.log("This is the shuffled array:");
        console.log(questionBank);
}

function questionPopUp() {

    // event.stopPropagation();

    // nextBtn.setAttribute("class", "hidden");
    // nextBtn.removeEventListener("click", questionPopUps, false);
    
    

    // increaseScore = false;
    // button1El.setAttribute.disabled = false;
    // button2El.setAttribute.disabled = false;
    // button3El.setAttribute.disabled = false;
    // button4El.setAttribute.disabled = false;

    // answerEl.textContent = "";

    // console.log("This is the length of the array before it's spliced:")
    // console.log(questionBankCopy.length);

    
    // index = Math.floor(Math.random()*questionBankCopy.length);

    currentQuestion = questionBank[index].question;

    questionEl.textContent = currentQuestion;

    currentChoice1 = questionBank[index].choice1;
    currentChoice2 = questionBank[index].choice2;
    currentChoice3 = questionBank[index].choice3;
    currentChoice4 = questionBank[index].choice4;
    questionAswer = questionBank[index].answer();
    var allchoices = [currentChoice1, currentChoice2, currentChoice3, currentChoice4]

    for (var i = 0; i < allchoices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = allchoices[i];
        buttonEl.setAttribute('type', 'button');
        buttonEl.className = "button" + i;
        buttonsEl.appendChild(buttonEl);
    }

    var firstButton = document.querySelector('.button0');
    var secondButton = document.querySelector('.button1');
    var thirdButton = document.querySelector('.button2');
    var fourthButton = document.querySelector('.button3');
    var newEl = document.createElement('p');
    newEl.className = "correct-incorrect";
    displayAnswerEl.appendChild(newEl);
    var correctEl = document.querySelector('.correct-incorrect');




    firstButton.addEventListener("click", function() {
        if(currentChoice1 === questionAswer) {
            // ifCorrect();
            
            correctEl.textContent = "Correct!";
            // correctEl.setAttribute('style', 'border, border-top: solid #354F52;')
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            score += 1;
            console.log("This is the current score: " + score);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }

        } else {
            // ifIncorrect();
            correctEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            reduceTimer = true;
            console.log("Reduce time? " + reduceTimer);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    secondButton.addEventListener("click", function() {
        if(currentChoice2 === questionAswer) {
            // ifCorrect();
            correctEl.textContent = "Correct!";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            score += 1;
            console.log("This is the current score: " + score);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
        } else {
            // ifIncorrect();
            correctEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            reduceTimer = true;
            console.log("Reduce time? " + reduceTimer);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    thirdButton.addEventListener("click", function() {
        if(currentChoice3 === questionAswer) {
            // ifCorrect();
            answerEl.setAttribute('class', 'visible');
            correctEl.textContent = "Correct!";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            score += 1;
            console.log("This is the current score: " + score);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
        } else {
            correctEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            reduceTimer = true;
            console.log("Reduce time? " + reduceTimer);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    fourthButton.addEventListener("click", function() {
        if(currentChoice4 === questionAswer) {
            // ifCorrect();
            correctEl.textContent = "Correct!";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            score += 1;
            console.log("This is the current score: " + score);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
            
        } else {
            // ifIncorrect();
            correctEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            reduceTimer = true;
            console.log("Reduce time? " + reduceTimer);

            if (index < questionBank.length) {
                var nextCreate = document.createElement('button');
                nextCreate.className = "next";
                nextCreate.textContent = "Next Question";
                nextCreate.setAttribute('type', 'button');
                nextQEl.appendChild(nextCreate);
                var nextEl = document.querySelector('.next');
                nextEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    nextEl.remove();
                    correctEl.textContent = "";
                    questionPopUp();
                })
            } else {
                var submitCreate = document.createElement('button');
                submitCreate.className = "submit";
                submitCreate.textContent = "See your results!";
                submitCreate.setAttribute('type', 'button');
                nextQEl.appendChild(submitCreate);
                var submitEl = document.querySelector('.submit');
                finishQuiz = true;
                submitEl.addEventListener("click", function() {
                    firstButton.remove();
                    secondButton.remove();
                    thirdButton.remove();
                    fourthButton.remove();
                    submitEl.remove();
                    correctEl.textContent = "";
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    index += 1;
    


    // button1El.textContent = currentChoice1;
    // button1El.setAttribute("class", "visible");

    // button2El.textContent = currentChoice2;
    // button2El.setAttribute("class", "visible");

    // button3El.textContent = currentChoice3;
    // button3El.setAttribute("class", "visible");

    // button4El.textContent = currentChoice4;
    // button4El.setAttribute("class", "visible");

    // counter --;

    // console.log("counter: " + counter);

    // questionBankCopy.splice(index,1);

    // console.log("This is the length of the array after it's spliced:")
    // console.log(questionBankCopy.length);

    
}



// function ifCorrect() {
    // answerEl.textContent = "Correct!";
    // reduceTimer = false;
    // score += 1;
    // console.log(score);
    // if(index < 5) {
    //     nextBtn.setAttribute("class", "visible");
    //     nextBtn.addEventListener("click", questionPopUps);
    // } else {
    //     finishBtn.setAttribute("class", "visible");
    //     finishBtn.addEventListener("click", endOfQuiz);
    //     finishQuiz = true;
    // }


    // removeEventListeners();
    // firstButton.setAttribute('disabled','disabled');
    // secondButton.setAttribute('disabled','disabled');
    // thirdButton.setAttribute('disabled','disabled');
    // fourthButton.setAttribute('disabled','disabled');
    
   
    // calculateScore();
    // questionPopUps();
    
        // increaseScore = true;
        // score += 1;
        // console.log(score);
    
// }

// function ifIncorrect() {
    // answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
    
    
    
    // removeEventListeners();
    // button1El.setAttribute('disabled','disabled');
    // button2El.setAttribute('disabled','disabled');
    // button3El.setAttribute('disabled','disabled');
    // button4El.setAttribute('disabled','disabled');
    // button1El.setAttribute.disabled = true;
    // button2El.setAttribute.disabled = true;
    // button3El.setAttribute.disabled = true;
    // button4El.setAttribute.disabled = true;
    // reduceTimer === true;
    // console.log(reduceTimer);
    // questionPopUps();
    // calculateScore();



//     if(index < 5) {
//         reduceTimer = true;
//         console.log(reduceTimer);
//         nextBtn.setAttribute("class", "visible");
//         nextBtn.addEventListener("click", questionPopUps, true);
//     } else {
//         finishBtn.setAttribute("class", "visible");
//         finishBtn.addEventListener("click", endOfQuiz);
//         finishQuiz = true;
//     }

// }

// function checkAnswer() {

    // if (questionBankCopy.length === 0) {
    //     endOfQuiz();
    //     finishQuiz = true;
    // };

    // button1El.addEventListener("click", function() {
    //     if(currentChoice1 === questionAswer) {
    //         ifCorrect();
    //     } else {
    //         ifIncorrect();
    //     }
    // }, true);

    // button2El.addEventListener("click", function() {
    //     if(currentChoice2 === questionAswer) {
    //         ifCorrect();
    //     } else {
    //         ifIncorrect();
    //     }
    // }, true);

    // button3El.addEventListener("click", function() {
    //     if(currentChoice3 === questionAswer) {
    //         ifCorrect();
    //     } else {
    //         ifIncorrect();
    //     }
    // }, true);

    // button4El.addEventListener("click", function() {
    //     if(currentChoice4 === questionAswer) {
    //         ifCorrect();
    //     } else {
    //         ifIncorrect();
    //     }
    // }, true);
    
    // return reduceTimer, score;
    
    

// }

// function removeEventListeners() {

//     button1El.removeEventListener("click", function() {
//         if(currentChoice1 === questionAswer) {
//             ifCorrect();
//         } else {
//             ifIncorrect();
//         }
//     }, false);

//     button2El.removeEventListener("click", function() {
//         if(currentChoice2 === questionAswer) {
//             ifCorrect();
//         } else {
//             ifIncorrect();
//         }
//     }, false);

//     button3El.removeEventListener("click", function() {
//         if(currentChoice3 === questionAswer) {
//             ifCorrect();
//         } else {
//             ifIncorrect();
//         }
//     }, false);

//     button4El.removeEventListener("click", function() {
//         if(currentChoice4 === questionAswer) {
//             ifCorrect();
//         } else {
//             ifIncorrect();
//         }
//     }, false);
    

// }

// function calculateScore() {
//     if (increaseScore === true) {
//         score ++;
//         increaseScore === false;
//     }
//     console.log("This is the score:")
//     console.log(score);
// }

function endOfQuiz() {
    // event.preventDefault();
    questionEl.remove();
    // button1El.remove();
    // button2El.remove();
    // button3El.remove();
    // button4El.remove();
    // answerEl.remove();
    // nextBtn.remove();
    // finishBtn.remove();

    headingEl.setAttribute("class", "visible");
    headingEl.textContent = "You finished!";
    subContentEl.setAttribute("class", "visible");
    subContentEl.textContent = "Your score is " + score;
    triviaImg.setAttribute('class', 'visible');
    
    if(score > 7) {
        triviaImg.setAttribute('src', 'Assets/JPEGs/superfan-score-range.jpg');
    } else if (score > 3 && score < 8) {
        triviaImg.setAttribute('src', 'Assets/JPEGs/mediocre-score-range.jpg');
    } else {
        triviaImg.setAttribute('src', 'Assets/JPEGs/worst-score-range.jpg');
    }
        

    var userInput = document.createElement('input');
    userInput.className = "initials";
    userInput.textContent = "See your results!";
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('style', 'display:block; margin: 5%; width: 100%;');
    userInput.setAttribute('maxlength', '3');
    userInput.setAttribute('placeholder', 'Enter your initial here');

    var submitScore = document.createElement('button');
    submitScore.textContent = "See if you make the cut!";
    submitScore.setAttribute('type', 'button');
    submitScore.className = "score-submit";

    subContentEl.appendChild(userInput);
    subContentEl.appendChild(submitScore);

        var scoreButton = document.querySelector(".score-submit");

        scoreButton.addEventListener("click", function(event){
            event.preventDefault();

            console.log("You clicked the sumbit button!")
    
            var mostRecentUser = document.querySelector('.initials').value;
            var mostRecentScore = score;
            var scoreData = {
                score: mostRecentScore,
                initials: mostRecentUser
            }

            highScores.push(scoreData);
            highScores.sort(function(a,b){return b.score-a.score});
            console.log(highScores);
            highScores.splice(5);

            localStorage.setItem('highScores', JSON.stringify(highScores))
                
            console.log(highScores);

            if(mostRecentUser === "") {
                alert("Please enter your initals.");
            }
    
            else {
                window.location.href = "Assets/high-scores.html";
            }
        //         localStorage.setItem("userScore", mostRecentScore);
        //         localStorage.setItem("userInitials", mostRecentUser);
        //         // openHighScores();
        //         // writeScoreData();
        //     }
    
        // });
    
    console.log("End of quiz!");
});
}



// function writeScoreData() {
    // var submitEl = localStorage.getItem("userInitials");
    // var score = localStorage.getItem("userScore");

    // var newRow = document.createElement('tr');
    // var initialsRow = document.createElement('td');
    // initialsRow.textContent = submitEl;

    // console.log("Log initials row:" + initialsRow);

    // var scoreRow = document.createElement('td');
    // scoreRow.textContent = score;

    // console.log("Log score row:" +scoreRow);

    // newRow.appendChild(initialsRow);
    // newRow.appendChild(scoreRow);
    
//     scoreTable.appendChild(newRow);
    
// }

// function openHighScores() {
//     var submitEl = localStorage.getItem("userInitials");
//     var score = localStorage.getItem("userScore");

//     headingEl.textContent = "High Scores";
//     subContentEl.setAttribute("class", "hidden");

//     var creatTable = document.createElement('table');
//     var creatTableHeader = document.createElement('thead');
//     var creatTableHeaderData1 = document.createElement('td');
//     var creatTableHeaderData2 = document.createElement('td');
//     creatTableHeaderData1.textContent = "User Initials";
//     creatTableHeader.appendChild(creatTableHeaderData1);
//     creatTableHeaderData2.textContent = "Score";
//     creatTableHeader.appendChild(creatTableHeaderData2);
//     creatTable.appendChild(creatTableHeader);

//     var tableBody = document.createElement('tbody')
//     var newRow = document.createElement('tr');
//     var initialsRow = document.createElement('td');
//     initialsRow.textContent = submitEl;

//     console.log("Log initials row:" + initialsRow);

//     var scoreRow = document.createElement('td');
//     scoreRow.textContent = score;

//     console.log("Log score row:" +scoreRow);

//     newRow.appendChild(initialsRow);
//     newRow.appendChild(scoreRow);

//     tableBody.appendChild(newRow);


//     creatTable.appendChild(tableBody);
//     mainContentEl.appendChild(creatTable);

// }



function init() {
    shuffleArray();
}

init();