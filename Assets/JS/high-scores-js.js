var highScoreList = document.querySelector(".high-scores-list");

//get score data from local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);

//for each high score in local storage, create list item and appends it to screen
for (var i = 0; i < highScores.length; i++) {
    var listEl = document.createElement('li');
    listEl.textContent = (i+1) + ". " + highScores[i].initials + " - " + highScores[i].score + "%";
    listEl.setAttribute('class', 'scoresList');
    highScoreList.appendChild(listEl);
}