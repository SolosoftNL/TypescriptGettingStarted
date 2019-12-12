"use strict";
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-1, playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
function logPlayer(name) {
    if (name === void 0) { name = 'Player Unknown!'; }
    console.log("New game starting for player: " + name);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else
        logger = logMessage;
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
    logger("The score is: " + score);
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
logMessage("Welcome to MultiMath!");
function logError(err) {
    console.error(err);
}
var myResult = {
    playerName: "Marie",
    score: 5,
    factor: 7,
    problemCount: 5
};
var person = {
    name: "Ronald",
    age: undefined,
    formatName: function () { return "Daniel"; }
};
console.log("Player's information: name: " + person.name + ", age: " + person.age + ", formatName: " + person.formatName);
//# sourceMappingURL=app.js.map