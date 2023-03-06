let croix = document.getElementsByClassName("croix");
let rond = document.getElementsByClassName("rond");
let caseArea = document.getElementsByClassName("caseArea");

let gameStatus = ["", "", "", "", "", "", "", "", ""]

for (let i = 0; i < croix.length; i++) {
    croix[i].style.visibility = "hidden";
    rond[i].style.visibility = "hidden";
}

function winner() {
    for (let i = 0; i < gameStatus.length; i++) {
        if (gameStatus[i] != "") {
            if (gameStatus[i] == gameStatus[i + 1] && gameStatus[i] == gameStatus[i + 2]) {
                console.log(`${gameStatus[i]} is the winner !`)
            }
            if (gameStatus[i] == gameStatus[i + 3] && gameStatus[i] == gameStatus[i + 6]) {
                console.log(`${gameStatus[i]} is the winner !`)
            }
        }
    }

}


function turn(shape) {

    for (let i = 0; i < caseArea.length; i++) {
        caseArea[i].onclick = function () {
            if (shape === "croix") {
                croix[i].style.visibility = "visible";
                gameStatus.splice(i, 1, "Red")
                console.log(gameStatus)
                turn("rond")
                winner()
            } else {
                rond[i].style.visibility = "visible";
                gameStatus.splice(i, 1, "Green")
                console.log(gameStatus)
                turn("croix")
                winner()
            }
        }

    }
}



turn("croix")





