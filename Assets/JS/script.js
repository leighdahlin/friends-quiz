var secondsLeft = 121;
var timeEl = document.querySelector("#time");
var highScoresLink = document.querySelector("#high-scores");
var headingEl = document.querySelector("#main-content-head");
var headerImage = document.querySelector("#header-img");
var mainContentEl = document.querySelector(".main-content");
var triviaImg = document.querySelector(".trivia-img");
var subContentEl = document.querySelector("#sub-content");
var startButtonEl = document.querySelector(".start-button");
var questionEl = document.querySelector("#question-head");
var buttonsEl = document.querySelector(".button-div");
var displayAnswerEl = document.querySelector(".answer");
var nextQEl = document.querySelector(".next-div");
var containerEl = document.querySelector(".container");
var highScores = JSON.parse(localStorage.getItem("highScores",)) || [];
var maxHighScores = 5;
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
  
startButtonEl.addEventListener("click", removeIntroPage);
startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", questionPopUp);


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
        secondsLeft -= 10;
        reduceTimer = false;
        clearInterval(timerInterval);
        setTime();
    }

    if(finishQuiz === true) {
        clearInterval(timerInterval);
        timeEl.textContent = "";
    }

    if(secondsLeft <= 0) {
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

    headingEl.setAttribute("class", "visible");
    headingEl.textContent = "Whoops! Your time is up...";
    subContentEl.setAttribute("class", "visible");
    subContentEl.textContent = "You'll have to try again! Your score is " + (score/10)*100 + "%";
}


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
    correctEl.setAttribute('style', 'border: none;');


    firstButton.addEventListener("click", function() {
        if(currentChoice1 === questionAswer) {
            
            correctEl.textContent = "Correct!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }

        } else {
            correctEl.textContent = "Incorrect!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');           
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    secondButton.addEventListener("click", function() {
        if(currentChoice2 === questionAswer) {
            correctEl.textContent = "Correct!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
        } else {
            correctEl.textContent = "Incorrect!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    thirdButton.addEventListener("click", function() {
        if(currentChoice3 === questionAswer) {
            correctEl.textContent = "Correct!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
        } else {
            correctEl.textContent = "Incorrect!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    fourthButton.addEventListener("click", function() {
        if(currentChoice4 === questionAswer) {
            correctEl.textContent = "Correct!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
            
        } else {
            correctEl.textContent = "Incorrect!";
            correctEl.setAttribute('style', 'border-top:solid 2px #354F52;');
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
                    correctEl.remove();
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
                    correctEl.remove();
                    endOfQuiz();
                
                })
            }
        }
    }, true);

    index += 1;
    
}

function endOfQuiz() {
    questionEl.remove();

    console.log("End of quiz!");

    score = Math.floor((score/10)*100);

    console.log(score);

    headerImage.setAttribute('class', 'hidden');
    subContentEl.setAttribute("class", "visible");
    subContentEl.textContent = "Your score is " + score + "%";
    
    
    if(score > 80) {
        headingEl.textContent = "You're definitely a SUPERFAN!";
        triviaImg.setAttribute('src', 'Assets/JPEGs/superfan-score-range.jpg');
        triviaImg.setAttribute('style', 'width: 50%;');
    } else if (score > 30 && score < 80) {
        headingEl.textContent = "Is that all you got? You're not quite a Superfan.";
        triviaImg.setAttribute('src', 'Assets/JPEGs/mediocre-score-range.jpg');
        triviaImg.setAttribute('style', 'width: 50%;');
    } else {
        headingEl.textContent = "Do you even like FRIENDS?";
        triviaImg.setAttribute('src', 'Assets/JPEGs/worst-score-range.jpg');
        triviaImg.setAttribute('style', 'width: 50%;');
    };

    headingEl.setAttribute("class", "visible");
    triviaImg.setAttribute('class', 'visible');
        
    var userInput = document.createElement('input');
    userInput.className = "initials";
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('maxlength', '3');
    userInput.setAttribute('placeholder', 'Enter your initials');

    var submitScore = document.createElement('button');
    submitScore.textContent = "High Scores";
    submitScore.setAttribute('type', 'button');
    submitScore.className = "score-submit";

    mainContentEl.appendChild(userInput);
    mainContentEl.appendChild(submitScore);

        var scoreButton = document.querySelector(".score-submit");

        scoreButton.addEventListener("click", function(event){
            event.preventDefault();
    
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
    
    
});
}


function init() {
    shuffleArray();
}

init();