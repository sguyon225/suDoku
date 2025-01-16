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

function makeBox() {
    for (let i = 0; i < 9; i++) {
        let box = document.createElement('div');
        box.classList.add("box");
        box.onclick = () => changeColor(box);
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
async function getImage(){
    const imageUrl = "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/69246-817480961.jpg";

    try {
        // Fetch the image as a blob
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Failed to fetch the image.');

        // Convert the response to a blob
        const imageBlob = await response.blob();

        // Create a local object URL for the blob
        const imageObjectURL = URL.createObjectURL(imageBlob);

        // Display the image
        const imageContainer = document.getElementById('imageContainer');
        const img = document.createElement('img');
        img.src = imageObjectURL;
        img.alt = 'Gecko Moria';
        img.style.maxWidth = '100%'; // Ensure it fits within the container
        img.style.height = 'auto';
        imageContainer.innerHTML = ''; // Clear any previous content
        imageContainer.appendChild(img);
    } catch (error) {
        console.error('Error downloading the image:', error);
    }
}