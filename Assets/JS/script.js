var secondsLeft = 0;
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
var allButtons = document.querySelectorAll("button");
var correctAnswer = true;

var question1 = {
    question: "What is an object in Javascript?",
    choice1: "A correlation of properties",
    choice2: "An array but bigger",
    choice3: "A function for strings",
    choice4: "A function for strings",
    answer: this.choice1 //see if I could use this to check answers
};

var question2 = {
    question: "Which best describes the window object?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answer: this.choice1
};

var question3 = {
    question: "How do you start a function?",
    choice1: "E",
    choice2: "F",
    choice3: "G",
    choice4: "H",
    answer: this.choice1
};

var question4 = {
    question: "What is an event listener?",
    choice1: "I",
    choice2: "J",
    choice3: "K",
    choice4: "L",
    answer: this.choice1
};

var question5 = {
    question: "Which of the timer intervals below will execute?",
    choice1: "M",
    choice2: "N",
    choice3: "O",
    choice4: "P",
    answer: this.choice1
};


var questionBank = [question1, question2, question3, question4, question5];
var currentQuestionIndex = 0;
var currentQuestion = questionBank[currentQuestionIndex].question;
var currentChoice1 = questionBank[currentQuestionIndex].choice1;
var currentChoice2 = questionBank[currentQuestionIndex].choice2;
var currentChoice3 = questionBank[currentQuestionIndex].choice3;
var currentChoice4 = questionBank[currentQuestionIndex].choice4;
var questionAswer = questionBank[currentQuestionIndex].answer;



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
    secondsLeft = 11;
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft ;
    
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timesUpMessage();
       
    }
}
, 1000)
};

function questionPopUps() {
    removeIntoPage();
    QuestionPopUp();
    for(var i = 1; i < questionBank.length; i++) {
        currentQuestionIndex = i;
        QuestionPopUp();
    }
    
};

function removeIntoPage() {
    headingEl.setAttribute("class", "hidden");
    subContentEl.remove();
    startButtonEl.remove();
}

function QuestionPopUp(event) {
    // event.preventDefault();
    questionEl.textContent = currentQuestion;

    button1El.textContent = currentChoice1;
    button1El.setAttribute("class", "visible");

    button2El.textContent = currentChoice2;
    button2El.setAttribute("class", "visible");

    button3El.textContent = currentChoice3;
    button3El.setAttribute("class", "visible");

    button4El.textContent = currentChoice4;
    button4El.setAttribute("class", "visible");

    button1El.addEventListener("click", function() {
        console.log(currentChoice1);
        console.log(questionAswer);
        if(currentChoice1 == questionAswer) {
            console.log("correct!")
        }
    })
    



// var buttonDiv = document.createElement("div");
// buttonDiv.setAttribute("id", "button-div");
// buttonDiv.setAttribute("style", "display: flex; flex-direction: column; width: 45%;");
// mainContentEl.appendChild(buttonDiv);
// var buttonEl = document.querySelector("#button-div");

// var choiceButton1 = document.createElement("button");
// choiceButton1.setAttribute("id", "choice-button-1");
// choiceButton1.setAttribute("class", "button");
// choiceButton1.setAttribute("style", "text-align: left;"); //could use querySelectorAll to select all of these and set certain attributes using for loop
// var buttonQuestion = document.createTextNode(choice1);
// choiceButton1.appendChild(buttonQuestion);
// buttonEl.appendChild(choiceButton1);


// var choiceButton2 = document.createElement("button");
// choiceButton2.setAttribute("id", "choice-button-2");
// choiceButton2.setAttribute("class", "button");
// choiceButton2.setAttribute("style", "text-align: left;");
// var buttonQuestion = document.createTextNode(choice2);
// choiceButton2.appendChild(buttonQuestion);
// buttonEl.appendChild(choiceButton2);

// var choiceButton3 = document.createElement("button");
// choiceButton3.setAttribute("id", "choice-button-3");
// choiceButton3.setAttribute("class", "button");
// choiceButton3.setAttribute("style", "text-align: left;");
// var buttonQuestion = document.createTextNode(choice3);
// choiceButton3.appendChild(buttonQuestion);
// buttonEl.appendChild(choiceButton3);

// var choiceButton4 = document.createElement("button");
// choiceButton4.setAttribute("id", "choice-button-4");
// choiceButton4.setAttribute("class", "button");
// choiceButton4.setAttribute("style", "text-align: left;");
// var buttonQuestion = document.createTextNode(choice4);
// choiceButton4.appendChild(buttonQuestion);
// buttonEl.appendChild(choiceButton4);



// var nextButton = document.createElement("button");
// nextButton.setAttribute("id", "next-button")
// var textNode = document.createTextNode("Next");
// nextButton.appendChild(textNode);
// mainContentEl.appendChild(nextButton);
// var nextButtonEl = document.querySelector("#next-button");

// nextButtonEl.addEventListener("click", nextQuestionPopUp);

}

// function nextQuestionPopUp() {
//     var randomQuestionIndex = questionBank[Math.floor(Math.random()*questionBank.length)];
//     var randomQuestion = randomQuestionIndex.question;

//     headingEl.textContent = randomQuestion;
//     console.log(randomQuestionIndex.choice1)

    // var choice1 = randomQuestionIndex.choice1;
    // var choice2 = randomQuestionIndex.choice2;
    // var choice3 = randomQuestionIndex.choice3;
    // var choice4 = randomQuestionIndex.choice4;

//     var choiceButton1El = document.querySelector("#choice-button-1");
//     var choiceButton1E2 = document.querySelector("#choice-button-2");
//     var choiceButton1E3 = document.querySelector("#choice-button-3");
//     var choiceButton1E4 = document.querySelector("#choice-button-4");

//     choiceButton1El.textContent = randomQuestionIndex.choice1;
//     choiceButton1E2.textContent = randomQuestionIndex.choice2;
//     choiceButton1E3.textContent = randomQuestionIndex.choice3;
//     choiceButton1E4.textContent = randomQuestionIndex.choice4;

//     var nextButtonEl = document.querySelector("#next-button");

//     nextButtonEl.addEventListener("click", nextQuestionPopUp);
// }

function timesUpMessage() {

    questionEl.remove();
    button1El.remove();
    button2El.remove();
    button3El.remove();
    button4El.remove();

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

