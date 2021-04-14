var secondsLeft = 121;
var timeEl = document.querySelector("#time");
var startButtonEl = document.querySelector(".start-button");
var headingEl = document.querySelector("#main-content-head");
var subContentEl = document.querySelector(".sub-content");
var mainContentEl = document.querySelector(".main-content");
var questionEl = document.querySelector("#question-head");
var button1El = document.querySelector("#button1");
var button2El = document.querySelector("#button2");
var button3El = document.querySelector("#button3");
var button4El = document.querySelector("#button4");
var answerEl = document.querySelector("#answer");
var reduceTimer = false;

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
var currentQuestionIndex = 0;
// var currentQuestion = questionBank[currentQuestionIndex].question;
// var currentChoice1 = questionBank[currentQuestionIndex].choice1;
// var currentChoice2 = questionBank[currentQuestionIndex].choice2;
// var currentChoice3 = questionBank[currentQuestionIndex].choice3;
// var currentChoice4 = questionBank[currentQuestionIndex].choice4;
// var questionAswer = questionBank[currentQuestionIndex].answer();



startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", questionPopUps);

//using the Fisher-Yates shuffle
function shuffle(array) {
    for (var i = array.length-1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]]
        array.join('');
    }
    console.log(array);
}


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

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timesUpMessage();
    }
}
, 1000)
};

function questionPopUps() {

    removeIntroPage();
    questionPopUp(0);
   

    // indexFunction();
    // nextQuestion();
    
    // for(var i = 0; i < questionBank.length; i++) {
    //     questionPopUp();
    //     checkAnswer();
    //     currentQuestionIndex ++;
    // }

    
};

function removeIntroPage() {
    headingEl.setAttribute("class", "hidden");
    subContentEl.remove();
    startButtonEl.remove();
}

function indexFunction() {
    var index = 0;
    if (questionBank.length < 5) {
        index++;
    }
    return index;
}

function questionPopUp(i) {
    // var currentQuestionIndex = 0;
    var currentQuestion = questionBank[i].question;
    var currentChoice1 = questionBank[i].choice1;
    var currentChoice2 = questionBank[i].choice2;
    var currentChoice3 = questionBank[i].choice3;
    var currentChoice4 = questionBank[i].choice4;
    var questionAswer = questionBank[i].answer();

    questionEl.textContent = currentQuestion;

    button1El.textContent = currentChoice1;
    button1El.setAttribute("class", "visible");

    button2El.textContent = currentChoice2;
    button2El.setAttribute("class", "visible");

    button3El.textContent = currentChoice3;
    button3El.setAttribute("class", "visible");

    button4El.textContent = currentChoice4;
    button4El.setAttribute("class", "visible");


    console.log(i);
    console.log(currentQuestion);


    // checkAnswer();

    button1El.addEventListener("click", function() {
        if(currentChoice1 === questionAswer) {
            answerEl.textContent = "Correct!";
            // currentQuestionIndex++;
            reduceTimer = false;
        } else {
            answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            // currentQuestionIndex++;
            reduceTimer = true;
        }
    });

    button2El.addEventListener("click", function() {
        if(currentChoice2 == questionAswer) {
            console.log("correct!");
            answerEl.textContent = "Correct!";
            // currentQuestionIndex++;
            reduceTimer = false;
        } else {
            answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            // currentQuestionIndex++;
            reduceTimer = true;
        }
    });

    button3El.addEventListener("click", function() {
        if(currentChoice3 == questionAswer) {
            console.log("correct!");
            answerEl.textContent = "Correct!";
            // currentQuestionIndex++;
            reduceTimer = false;
        } else {
            answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            // currentQuestionIndex++;
            reduceTimer = true;
        }
    });

    button4El.addEventListener("click", function() {
        if(currentChoice4 == questionAswer) {
            console.log("correct!");
            answerEl.textContent = "Correct!";
            // currentQuestionIndex++;
            reduceTimer = false;
        } else {
            answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
            // currentQuestionIndex++;
            reduceTimer = true;
        }
    });

    return reduceTimer;


}




function nextQuestion() {
    questionPopUp();
}

function checkAnswer() {
    // button1El.addEventListener("click", function() {
    //     if(currentChoice1 === questionAswer) {
    //         answerEl.textContent = "Correct!";
    //         // currentQuestionIndex++;
    //         reduceTimer = false;
    //     } else {
    //         answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
    //         // currentQuestionIndex++;
    //         reduceTimer = true;
    //     }
    // });

    // button2El.addEventListener("click", function() {
    //     if(currentChoice2 == questionAswer) {
    //         console.log("correct!");
    //         answerEl.textContent = "Correct!";
    //         // currentQuestionIndex++;
    //         reduceTimer = false;
    //     } else {
    //         answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
    //         // currentQuestionIndex++;
    //         reduceTimer = true;
    //     }
    // });

    // button3El.addEventListener("click", function() {
    //     if(currentChoice3 == questionAswer) {
    //         console.log("correct!");
    //         answerEl.textContent = "Correct!";
    //         // currentQuestionIndex++;
    //         reduceTimer = false;
    //     } else {
    //         answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
    //         // currentQuestionIndex++;
    //         reduceTimer = true;
    //     }
    // });

    // button4El.addEventListener("click", function() {
    //     if(currentChoice4 == questionAswer) {
    //         console.log("correct!");
    //         answerEl.textContent = "Correct!";
    //         // currentQuestionIndex++;
    //         reduceTimer = false;
    //     } else {
    //         answerEl.textContent = "Incorrect! The correct answer is \"" + questionAswer + ".\"";
    //         // currentQuestionIndex++;
    //         reduceTimer = true;
    //     }
    // });

    // return reduceTimer;

}

function timesUpMessage() {

    questionEl.remove();
    button1El.remove();
    button2El.remove();
    button3El.remove();
    button4El.remove();
    answerEl.remove();

    headingEl.setAttribute("class", "visible");
    headingEl.textContent = "Your time is up!";
    var viewHighScore = document.createElement("p");
    var textNode = document.createTextNode("View your high score");
    viewHighScore.appendChild(textNode);
    mainContentEl.appendChild(viewHighScore);

}

function init() {
    shuffle(questionBank);
}

init();

