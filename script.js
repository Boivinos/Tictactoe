let croix = document.getElementsByClassName("croix");
let rond = document.getElementsByClassName("rond");
let caseArea = document.getElementsByClassName("caseArea");
let grille = document.getElementById("grille");
let gameOver = false;
let players = ["Red", "Green"]
let gameStatus = ["", "", "", "", "", "", "", "", ""]

for (let i = 0; i < croix.length; i++) {
    croix[i].style.visibility = "hidden";
    rond[i].style.visibility = "hidden";
}

function winner() {

    for (let i = 0; i < gameStatus.length; i++) {

        if (gameStatus[i] != "") {
            if ((i == 0 || i == 3 || i == 6) && gameStatus[i] == gameStatus[i + 1] && gameStatus[i] == gameStatus[i + 2]) {
                console.log(`${gameStatus[i]} is the winner !`)
                gameOver = true;
            }
            if (gameStatus[i] == gameStatus[i + 3] && gameStatus[i] == gameStatus[i + 6]) {
                console.log(`${gameStatus[i]} is the winner !`)
                gameOver = true;
            }
            if (gameStatus[i] == gameStatus[i + 4] && gameStatus[i] == gameStatus[i + 8]) {
                console.log(`${gameStatus[i]} is the winner !`)
                gameOver = true;
            }
            if (i == 4 && gameStatus[i] == gameStatus[i + 2] && gameStatus[i] == gameStatus[i - 2]) {
                console.log(`${gameStatus[i]} is the winner !`)
                gameOver = true;
            }
        }
    }
}

function turn(shape) {
    for (let i = 0; i < caseArea.length; i++) {
        caseArea[i].onclick = function () {
            if (gameStatus[i] == "" && shape === "croix") {
                croix[i].style.visibility = "visible";
                gameStatus.splice(i, 1, "Red")
                turn("rond")
                winner()
            } else if (gameStatus[i] == "") {
                rond[i].style.visibility = "visible";
                gameStatus.splice(i, 1, "Green")
                turn("croix")
                winner()
            } else {
                console.log("Cette case est déjà occupée")
            }
        }
    }
}

document.getElementById("grille").onclick = turn("croix")








