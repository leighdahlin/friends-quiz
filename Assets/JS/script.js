var secondsLeft = 101;
var timeEl = document.querySelector("#time");
var startButtonEl = document.querySelector(".start-button");
var headingEl = document.querySelector("#main-content-head");
var subContentEl = document.querySelector("#sub-content");
var mainContentEl = document.querySelector(".main-content");
var questionEl = document.querySelector("#question-head");

var buttonsEl = document.querySelector(".button-div");
var displayAnswerEl = document.querySelector(".answer");
var nextQEl = document.querySelector(".next-div");
// var userScore = localStorage.getItem("user-score");
// var userInitials = localStorage.getItem("initials");

var scoreTable = document.querySelector(".score-table");

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
    question: "What is an object in Javascript?",
    choice1: "A correlation of properties",
    choice2: "An array but bigger",
    choice3: "A function for strings",
    choice4: "A function for strings",
    answer: function() {
        return this.choice1;
     } 
};

var question2 = {
    question: "Which best describes the window object?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: function() {
       return this.choice1;
    }
};

var question3 = {
    question: "How do you start a function?",
    choice1: "E",
    choice2: "F",
    choice3: "G",
    choice4: "H",
    answer: function() {
        return this.choice1;
     }
};

var question4 = {
    question: "What is an event listener?",
    choice1: "I",
    choice2: "J",
    choice3: "K",
    choice4: "L",
    answer: function() {
        return this.choice1;
     }
};

var question5 = {
    question: "Which of the timer intervals below will execute?",
    choice1: "M",
    choice2: "N",
    choice3: "O",
    choice4: "P",
    answer: function() {
        return this.choice1;
     }
};


var questionBank = [question1, question2, question3, question4, question5];
// var questionBankCopy = questionBank.slice();
// var counter = questionBank.length + 1;
if(document.querySelector('.start-button')) {  
startButtonEl.addEventListener("click", removeIntroPage);
startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", questionPopUp);
}
// nextBtn.addEventListener("click", questionPopUps);

function removeIntroPage() {
    headingEl.setAttribute("class", "hidden");
    subContentEl.setAttribute("class", "hidden");
    startButtonEl.remove();

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
    // button1El.remove();
    // button2El.remove();
    // button3El.remove();
    // button4El.remove();
    // answerEl.remove();
    // nextBtn.remove();

    headingEl.setAttribute("class", "visible");
    headingEl.textContent = "Your time is up!";
    subContentEl.setAttribute("class", "visible");
    subContentEl.textContent = "Your score is " + score;


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
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            score += 1;
            console.log("This is the current score: " + score);

            if (index < 5) {
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

            if (index < 5) {
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

            if (index < 5) {
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

            if (index < 5) {
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
            correctEl.textContent = "Correct!";
            firstButton.setAttribute('disabled','disabled');
            secondButton.setAttribute('disabled','disabled');
            thirdButton.setAttribute('disabled','disabled');
            fourthButton.setAttribute('disabled','disabled');

            score += 1;
            console.log("This is the current score: " + score);

            if (index < 5) {
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

            if (index < 5) {
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

            if (index < 5) {
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

            if (index < 5) {
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

    var userInput = document.createElement('input');
    userInput.className = "initials";
    userInput.textContent = "See your results!";
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('style', 'display:block; margin: 5%; width: 100%;');
    userInput.setAttribute('maxlength', '3');
    userInput.setAttribute('placeholder', 'Enter your initial here');

    var anchorScorePage = document.createElement('a');
    // anchorScorePage.setAttribute('href', 'Assets/high-scores.html');
    var submitScore = document.createElement('button');
    submitScore.textContent = "Add to Score Board";
    // submitScore.setAttribute('type', 'button');
    // submitScore.setAttribute('id', 'score-submit');
    submitScore.className = "score-submit";

    anchorScorePage.appendChild(submitScore);

    subContentEl.appendChild(userInput);
    subContentEl.appendChild(anchorScorePage);

    window.onload=function (){
        var scoreButton = document.querySelector(".score-submit");

        scoreButton.addEventListener("click", function(){
            // event.preventDefault();

            console.log("You clicked the sumbit button!")
    
        //     var submitEl = document.querySelector('.initials').value;
        //     if(submitEl = "") {
        //         alert("Please enter your initals.")
        //     }  
    
        //     localStorage.setItem("userScore", score);
        //     localStorage.setItem("userInitials", submitEl);
    
        //     var newRow = document.createElement('tr');
        //     var initialsRow = document.createElement('td');
        //     initialsRow.textContent = submitEl;
        //     var scoreRow = document.createElement('td');
        //     scoreRow.textContent = score;
        //     newRow.appendChild(initialsRow);
        //     newRow.appendChild(scoreRow);
    
        //     scoreTable.appendChild(newRow);
    
    
        });
      };
    
    console.log("End of quiz!");
}


function init() {
    shuffleArray();
}

init();