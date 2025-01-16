// function makeBoxes(word) {
//     if (window.localStorage) {
//         if (word) {
//             localStorage.setItem('newWord', word);
//         }

//         if (localStorage.getItem('newWord')) {
//             document.getElementById('displayText').textContent = localStorage.getItem('newWord');
//         }
//     }
// }

// function clearWord() {
//     localStorage.removeItem('newWord');
//     document.getElementById('displayText').textContent = "Your text will appear here.";
// }

function makeBoxes(){
    for(i=0;i<9;i++){
        box=document.createElement('label').classList("box");
        document.getElementById("board").appendChild(box);
    }
}
function clearboxes(){
    board=document.getElementById("board");
    while(board.firstChild()){
        board.removeChild(board.lastChild())
    }
}