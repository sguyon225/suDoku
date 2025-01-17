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
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
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