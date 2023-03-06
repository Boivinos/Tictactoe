let croix = document.getElementsByClassName("croix");
let rond = document.getElementsByClassName("rond");
let caseArea = document.getElementsByClassName("caseArea");

for (let i = 0; i < croix.length; i++) {
    croix[i].style.visibility = "hidden";
    rond[i].style.visibility = "hidden";
}

function winner() {
    for (let i = 0; i < 3; i += 3)
        if (rond[i].style.visibility === "visible" && rond[i + 1].style.visibility === "visible" && rond[i + 2].style.visibility === "visible") {
            alert("Green is the winner !")
        }
}


function turn(playerColor) {
    if (playerColor == "red") {
        for (let i = 0; i < caseArea.length; i++) {
            caseArea[i].onclick = function () {
                croix[i].style.visibility = "visible";
                turn("green")
            }
        }
    }
    if (playerColor == "green") {
        for (let i = 0; i < caseArea.length; i++) {
            caseArea[i].onclick = function () {
                rond[i].style.visibility = "visible";
                turn("red")
                winner()

            }
        }
    }
}



turn("red")





