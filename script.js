function makeBoxes() {
    for (let i = 0; i < 9; i++) {
        let box = document.createElement('div');
        box.classList.add("box");
        box.onclick = () => changeColor(box); // Click to toggle color
        document.getElementById("board").appendChild(box);
    }
}

function clearBoxes() {
    let board = document.getElementById("board");
    let boxes = board.getElementsByClassName("box");

    Array.from(boxes).forEach(box => {
        box.classList.remove("blue", "green");
    });
}

function makeAffils() {
    let game = document.getElementById("game");
    let choices = [];
    console.log(choices);

    fetch("affiliations.txt")
        .then((res) => res.text())
        .then((text) => {
            choices.push(...text.split("\n"));

            // Ensure choices are populated before continuing
            for (let i = 1; i <= 6; i++) {
                let item = Math.floor(Math.random() * choices.length);
                let affil = document.createElement("div");
                let span = document.createElement("span");
                let textNode = document.createTextNode(choices[item]);
                span.appendChild(textNode);
                affil.appendChild(span);
                affil.classList.add("affiliation");
                affil.setAttribute("id", "a" + i);
                game.appendChild(affil);

                // Remove the used choice
                choices.splice(item, 1);
            }
        })
        .catch((e) => console.error(e));
}



function makeGame(){
    makeAffils()
    makeBoxes()
}

function changeColor(box) {
    if (box.classList.contains("blue")) {
        box.classList.remove("blue");
        box.classList.add("green");
    } else if (box.classList.contains("green")) {
        box.classList.remove("green");
        box.classList.add("blue");
    } else {
        box.classList.add("blue");
    }
}