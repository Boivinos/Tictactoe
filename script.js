let croix = document.getElementsByClassName("croix");
let rond = document.getElementsByClassName("rond");
let caseArea = document.getElementsByClassName("caseArea");

for (let i = 0; i < croix.length; i++) {
    croix[i].style.visibility = "hidden";
    rond[i].style.visibility = "hidden";
}

function winner(shape) {
    let i = 0;
    for (i; i < 7; i += 3)
        if ((shape[i].style.visibility === "visible"
            && shape[i + 1].style.visibility === "visible"
            && shape[i + 2].style.visibility === "visible")
            || (shape[i].style.visibility === "visible"
                && shape[i + 3].style.visibility === "visible"
                && shape[i + 6].style.visibility === "visible")) {

            alert(`We have a winner !`)
        }
}


function turn(shape) {

    for (let i = 0; i < caseArea.length; i++) {
        caseArea[i].onclick = function () {
            if (shape === "croix") {
                croix[i].style.visibility = "visible";
                turn("rond")
                winner(croix)
            } else {
                rond[i].style.visibility = "visible";
                turn("croix")
                winner(rond)
            }
        }

    }
}



turn("croix")





