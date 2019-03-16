let randomNumber;
let currentAttempts = 0;
let maxAttempts = 10;

function easyLevel() {
    maxAttempts = 10;
    document.getElementById("easy-button").setAttribute("style", "background-color: #CF85FF; transform: scale(1.1); border: 1px solid #CF85FF;");
    document.getElementById("hard-button").style = "";
}

function hardLevel() {
    maxAttempts = 5;
    document.getElementById("hard-button").setAttribute("style", "background-color: #CF85FF; transform: scale(1.1); border: 1px solid #CF85FF;");
    document.getElementById("easy-button").style = "";
}

function playAgain() {
    window.location.reload();
}

function gameOver() {
    document.getElementById("new-button").style.display = "block";
    document.getElementById("hard-button").style.display = "none";
    document.getElementById("hardBtnInfo").style.display = "none";
    document.getElementById("easy-button").style.display = "none";
    document.getElementById("easyBtnInfo").style.display = "none";

    document.getElementById("messageOutput").style.marginBottom = "15px";
    document.getElementById("user-input").style.display = "none";
}

function newNumber() {
    randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber);

    document.getElementById("new-button").style.display = "none";
}

function guessCompared() {
    let userGuess = document.getElementById("user-input").value;

    currentAttempts++;
    document.getElementById("attempts").innerHTML = currentAttempts;

    if (currentAttempts < maxAttempts) {
        if (userGuess > randomNumber) {
            document.getElementById("messageOutput").innerHTML = "Your guess is too high.";
            document.getElementById("user-input").value = "";
        } else if (userGuess < randomNumber) {
            document.getElementById("messageOutput").innerHTML = "Your guess is too low."; 
            document.getElementById("user-input").value = ""; 
        } else {
            document.getElementById("messageOutput").innerHTML = "You are correct! Congratulations!";
            gameOver();
        }
    } else {
        if (userGuess > randomNumber) {
            document.getElementById("messageOutput").innerHTML = "You lost!";
            gameOver();
        } else if (userGuess < randomNumber) {
            document.getElementById("messageOutput").innerHTML = "You lost!";
            gameOver(); 
        } else {
            document.getElementById("messageOutput").innerHTML = "You are correct! Congratulations!";
            gameOver();
        }
    }

}

// Below is for the year in the footer section and not for the actual game.
var date = new Date();
var currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;