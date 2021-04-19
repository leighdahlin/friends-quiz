var highScoreList = document.querySelector(".high-scores-list");
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);

for (var i = 0; i < highScores.length; i++) {
    var listEl = document.createElement('li');
    listEl.textContent = (i+1) + ". " + highScores[i].initials + " - " + highScores[i].score + "%";
    listEl.setAttribute('class', 'scoresList');
    highScoreList.appendChild(listEl);
}