const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

let missed = 0;

const startGame = document.getElementsByClassName('btn__reset')[0];

// This hides an overlay //

startGame.addEventListener('click', function() {
    document.getElementById('overlay').style.display ="none";
});


// Array with 5 strings //

let phrases = ['Hello world', 'How you doing', 'Maybe not', 'Do not do this', 'I like you'];

// This function gets us random Phrase //

function getRandomPhraseAsArray() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber]
};

function checkLetter(button) {
    let allLi = document.getElementsByTagName('li');
};



