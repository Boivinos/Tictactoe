let caseArea = document.getElementsByClassName("caseArea");
let tourJoueur = document.getElementById("tourJoueur")
let grille = document.getElementById("grille");
let startGame = document.querySelectorAll('[id=start-game]')
let gameOver = false;
let gameStatus = ["", "", "", "", "", "", "", "", ""]
let symboles = { red: "X", green: "O" }
let alternance = { red: "green", green: "red" }
let traduction = { red: "rouge", green: "vert" }

function winnerDisplay(color) {
    tourJoueur.innerHTML = `<h2 class="titre-${color}">Victoire du joueur ${traduction[color]} !</h2>`
}

function turnDisplay(color) {
    tourJoueur.innerHTML = `<h2 class="titre-${color}">C'est au tour du joueur ${traduction[color]} !</h2>`
}

function endGame() {
    for (let i = 0; i < caseArea.length; i++) {
        caseArea[i].onclick = function () {
        }
    }
}

function winner() {

    for (let i = 0; i < gameStatus.length; i++) {

        if (gameStatus[i] != "") {
            if ((i == 0 || i == 3 || i == 6) && gameStatus[i] == gameStatus[i + 1] && gameStatus[i] == gameStatus[i + 2]) {
                winnerDisplay(gameStatus[i])
                gameOver = true;
                endGame()
            }
            if (gameStatus[i] == gameStatus[i + 3] && gameStatus[i] == gameStatus[i + 6]) {
                winnerDisplay(gameStatus[i])
                gameOver = true;
                endGame()
            }
            if (gameStatus[i] == gameStatus[i + 4] && gameStatus[i] == gameStatus[i + 8]) {
                winnerDisplay(gameStatus[i])
                gameOver = true;
                endGame()
            }
            if (i == 4 && gameStatus[i] == gameStatus[i + 2] && gameStatus[i] == gameStatus[i - 2]) {
                winnerDisplay(gameStatus[i])
                gameOver = true;
                endGame()
            }
        }
    }
}

function coup(color, rank) {
    caseArea[rank].innerHTML = `<div class="${color}" id="${color}">${symboles[color]}</div>`
    gameStatus.splice(rank, 1, color)
    winner()
    turn(alternance[color])
}

function turn(color) {

    for (let i = 0; i < caseArea.length; i++) {

        if (gameOver == false && gameStatus[i] == "") {
            caseArea[i].onclick = function () {
                turnDisplay(alternance[color])
                coup(color, i);
            }
        }
    }
}

document.querySelectorAll('button').forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        let color = occurence.innerHTML.toLowerCase()
        console.log(color)
        turn(color);
        turnDisplay(color);
    });
});




































