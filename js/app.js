const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
const phraseUl = phrase.querySelector('ul');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
const scoreboard = document.getElementById('scoreboard');
const liScoreboard = scoreboard.querySelectorAll('.tries');
let missed = 0;



// This hides an overlay //

startGame.addEventListener('click', () => {
    overlay.style.display ='none';
});


// Array with 5 strings //

let phrases = [
    'Hello world', 
    'How you doing', 
    'Maybe not', 
    'Do not do this', 
    'I like this'
];

// Get random Phrase function

function getRandomPhraseAsArray(arr) {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.toUpperCase().split("");
};


// Add phrase to display

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        phraseUl.appendChild(li);
        li.textContent = arr[i];
        if (arr[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}


// CheckLetter function

function checkLetter(btnClicked) {
    const ltrCLicked = btnClicked.textContent.toUpperCase();
    let letterFound = false;
    
    for (let i = 0; i < letter.length; i++) {
        if ( ltrClicked === letter[i].textContent) {
            letter[i].classList.add('show');
            letterFound = true;
        } 
    }

    return letterFound ? btnClicked : null;
}

// Create an addEventListener

window.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;

        const letterFound = checkLetter(e.target);

        if (letterFound === null) {
            missed += 1;
        }

        if (missed >= 1 && missed <= 5){
            const heart = liScoreboard[liScoreboard.length-missed];
            heart.getElementsByTagName('img')[0].src = 'images/lostHeart.png';
        }
    }
    checkWin();
});

// CheckWin function

function checkWin() {
    if (show.length == letter.length) {
        overlay.style.display = '';
        overlay.classList.add('win');
        document.getElementsByClassName('title')[0].textContent = 'You Won!';
    } else if (missed >= 5) {
        overlay.style.display = '';
        overlay.classList.add('lose');
        document.getElementsByClassName('title')[0].textContent = 'You Lost!';
    }
}


startGame.addEventListener('click', (e) => {
    if (e.target.textContent === 'Reset') {
        // set missed to 0
        missed = 0;

        // reset heart states
        for (let i = 0; i < liScoreboard.length; i++) {
            const img = liScoreboard[i].getElementsByTagName('img')[0];
            img.src = 'images/liveHeart.png';
        }
        while (phraseUl.children.length > 0) {
            phraseUl.removeChild(phraseUl.children[0]);
        }
        for (let i = 0; i < letterButtons.length; i++) {
            letterButtons[i].classList.remove('chosen');
            letterButtons[i].disabled = false;
        }
        overlay.classList.remove('win', 'lose');
        const newGamePhrase = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newGamePhrase);
    }
});


// Execution

const phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);