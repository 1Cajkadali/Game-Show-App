const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName('btn__reset')[0];
const phraseUl = phrase.querySelector('ul');
const letter = phrase.getElementsByClassName('letter');
const scoreboard = document.getElementById('scoreboard');
const liScoreboard = scoreboard.querySelectorAll('.tries');
const hearts = scoreboard.querySelectorAll('img');
let overlay = document.querySelector('#overlay');
const title = overlay.querySelector('.title')
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
        li.textContent = arr[i];
        phraseUl.appendChild(li);
        if (arr[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}


// CheckLetter function

function checkLetter(button) {
    const letterClicked = button.textContent.toUpperCase();
    let letterFound = false;
    
    for (let i = 0; i < letter.length; i++) {
        if ( letterClicked === letter[i].textContent) {
            letter[i].classList.add('show');
            letterFound = true;
        } 
    }
    return letterFound ? button : null;
}


// CheckWin function

function checkWin() {
    let guessedLetter = document.querySelectorAll('.show');

    if (guessedLetter.length === letter.length) {
        overlay.style.display = 'flex';
        overlay.classList.add('win');
        title.textContent = "You've Won!";
        startGame.style.display = 'none';
    } else if (missed > 4 ) {
        overlay.style.display = 'flex';
        overlay.classList.add('lose');
        title.textContent = "You've Lost!";
        startGame.style.display = 'none';
    }
    checkWin();
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


// Execution

const phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);