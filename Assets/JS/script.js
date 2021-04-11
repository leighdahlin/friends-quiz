var secondsLeft = 5;
var timeEl = document.querySelector("#time");
var startButtonEl = document.querySelector(".start-button");
var headingEl = document.querySelector(".main-content-head");
var subContentEl = document.querySelector(".sub-content");
var mainContentEl = document.querySelector(".main-content");

// var objectLength = Object.keys(questionBank).length;
// var question1 = ["What is an object in Javascript?", "A correlation of properties", "An array but bigger", "A function for strings", "A lot of things"];
// var question2 = ["Which best describes the window object?", "A", "B", "C", "D"];
var question1 = {
    question: "What is an object in Javascript?",
    choice1: "A correlation of properties",
    choice2: "An array but bigger",
    choice3: "A function for strings",
    choice4: "A function for strings"
}

var question2 = {
    question: "Which best describes the window object?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D"
}

var question3 = {
    question: "How do you start a function?",
    choice1: "E",
    choice2: "F",
    choice3: "G",
    choice4: "H"
}

var question4 = {
    question: "What is an event listener?",
    choice1: "I",
    choice2: "J",
    choice3: "K",
    choice4: "L"
}

var question5 = {
    question: "Which of the timer intervals below will execute?",
    choice1: "M",
    choice2: "N",
    choice3: "O",
    choice4: "P"
}

var answerKey = {
    question1: "choice1",
    question2: "choice2"
}

var questionBank = [question1, question2, question3, question4, question5];



// var questionBank = {
//     question1: ["What is an object in Javascript?", "A correlation of properties", "An array but bigger", "A function for strings", "A lot of things"],
//     question2: ["Which best describes the window object?", "A", "B", "C", "D"],
//     question3: ["How do you start a function?", "A", "B", "C", "D"],
//     question4: ["What is an event listener?", "A", "B", "C", "D"],
//     question5: ["Which of the timer intervals below will execute?", "A", "B", "C", "D"]
// }

startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", firstQuestionPopUp);


function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;
    
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timesUpMessage();
    }
}
, 1000)
};

// function questionPopUps() {
//     firstQuestionPopUp();
//     nextQuestionPopUp();
// };

function firstQuestionPopUp() {
// console.log(Object.keys(questionBank).length);
// console.log(questionBank.question1[0]);

var randomQuestionIndex = questionBank[Math.floor(Math.random()*questionBank.length)];
var randomQuestion = randomQuestionIndex.question;
// console.log(randomQuestionIndex);
// console.log(questionBank[0]);
// console.log(questionBank[1]);
// console.log(questionBank[2]);
// console.log(questionBank[3]);
// console.log(questionBank[4]);


// for(var i = 0; i < questionBank.length; i++) {
    
// }

 headingEl.textContent = randomQuestion;
 subContentEl.remove();
 startButtonEl.remove();


var choice1 = randomQuestionIndex.choice1;
var choice2 = randomQuestionIndex.choice2;
var choice3 = randomQuestionIndex.choice3;
var choice4 = randomQuestionIndex.choice4;

var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "button-div");
buttonDiv.setAttribute("style", "display: flex; flex-direction: column; width: 45%;");
mainContentEl.appendChild(buttonDiv);
var buttonEl = document.querySelector("#button-div");

var choiceButton1 = document.createElement("button");
choiceButton1.setAttribute("id", "choice-button-1");
choiceButton1.setAttribute("style", "text-align: left;");
var buttonQuestion = document.createTextNode(choice1);
choiceButton1.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton1);


var choiceButton2 = document.createElement("button");
choiceButton2.setAttribute("id", "choice-button-2");
choiceButton2.setAttribute("style", "text-align: left;");
var buttonQuestion = document.createTextNode(choice2);
choiceButton2.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton2);

var choiceButton3 = document.createElement("button");
choiceButton3.setAttribute("id", "choice-button-3");
choiceButton3.setAttribute("style", "text-align: left;");
var buttonQuestion = document.createTextNode(choice3);
choiceButton3.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton3);

var choiceButton4 = document.createElement("button");
choiceButton4.setAttribute("id", "choice-button-4");
choiceButton4.setAttribute("style", "text-align: left;");
var buttonQuestion = document.createTextNode(choice4);
choiceButton4.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton4);


var nextButton = document.createElement("button");
nextButton.setAttribute("id", "next-button")
var textNode = document.createTextNode("Next");
nextButton.appendChild(textNode);
mainContentEl.appendChild(nextButton);
var nextButtonEl = document.querySelector("#next-button");

nextButtonEl.addEventListener("click", nextQuestionPopUp);

}

function nextQuestionPopUp() {
    var randomQuestionIndex = questionBank[Math.floor(Math.random()*questionBank.length)];
    var randomQuestion = randomQuestionIndex.question;

    headingEl.textContent = randomQuestion;
    console.log(randomQuestionIndex.choice1)

    // var choice1 = randomQuestionIndex.choice1;
    // var choice2 = randomQuestionIndex.choice2;
    // var choice3 = randomQuestionIndex.choice3;
    // var choice4 = randomQuestionIndex.choice4;

    var choiceButton1El = document.querySelector("#choice-button-1");
    var choiceButton1E2 = document.querySelector("#choice-button-2");
    var choiceButton1E3 = document.querySelector("#choice-button-3");
    var choiceButton1E4 = document.querySelector("#choice-button-4");

    choiceButton1El.textContent = randomQuestionIndex.choice1;
    choiceButton1E2.textContent = randomQuestionIndex.choice2;
    choiceButton1E3.textContent = randomQuestionIndex.choice3;
    choiceButton1E4.textContent = randomQuestionIndex.choice4;

    var nextButtonEl = document.querySelector("#next-button");

    nextButtonEl.addEventListener("click", nextQuestionPopUp);
}

function timesUpMessage() {
    headingEl.textContent = "Your time is up!";
    subContentEl.textContent = "";

}

// function init() {
//     setTime();
// }

// init();