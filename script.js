function changeWord(word) {
    if (window.localStorage) {
        if (word) {
            localStorage.setItem('newWord', word);
        }

        if (localStorage.getItem('newWord')) {
            document.getElementById('displayText').textContent = localStorage.getItem('newWord');
        }
    }
}

function clearWord() {
    localStorage.removeItem('newWord');
    document.getElementById('displayText').textContent = "Your text will appear here.";
}