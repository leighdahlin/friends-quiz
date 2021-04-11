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
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D"
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
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D"
}

var question4 = {
    question: "What is an event listener?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D"
}

var question5 = {
    question: "Which of the timer intervals below will execute?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D"
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
startButtonEl.addEventListener("click", questionPopUp);
// nextButtonEl.addEventListener("click", questionPopUp)

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

function questionPopUp() {
// console.log(Object.keys(questionBank).length);
// console.log(questionBank.question1[0]);

var randomQuestionIndex = questionBank[Math.floor(Math.random()*questionBank.length)];
var randomQuestion = randomQuestionIndex.question;
console.log(randomQuestionIndex);
console.log(questionBank[0]);
console.log(questionBank[1]);
console.log(questionBank[2]);
console.log(questionBank[3]);
console.log(questionBank[4]);


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
buttonDiv.setAttribute("id", "button-div")
buttonDiv.setAttribute("style", "display: flex; flex-direction: column;")
mainContentEl.appendChild(buttonDiv);
var buttonEl = document.querySelector("#button-div");

var choiceButton = document.createElement("button");
var buttonQuestion = document.createTextNode(choice1);
choiceButton.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton);

var choiceButton = document.createElement("button");
var buttonQuestion = document.createTextNode(choice2);
choiceButton.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton);

var choiceButton = document.createElement("button");
var buttonQuestion = document.createTextNode(choice3);
choiceButton.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton);

var choiceButton = document.createElement("button");
var buttonQuestion = document.createTextNode(choice4);
choiceButton.appendChild(buttonQuestion);
buttonEl.appendChild(choiceButton);


var nextButton = document.createElement("button");
nextButton.setAttribute("id", "next-button")
var textNode = document.createTextNode("Next");
nextButton.appendChild(textNode);
mainContentEl.appendChild(nextButton);
var nexbuttonEl = document.querySelector("#next-button");
}

function timesUpMessage() {
    headingEl.textContent = "Your time is up!";
    subContentEl.textContent = "";

}

// function init() {
//     setTime();
// }

// init();