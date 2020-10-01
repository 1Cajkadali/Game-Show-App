const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

let missed = 0;

const startGame = document.getElementsByClassName('btn__reset')[0];

// This hides an overlay //

startGame.addEventListener('click', function() {
    document.getElementById('overlay').style.display ="none";
});


// Array with 5 strings //

let phrases = [
    'Hello world', 
    'How you doing', 
    'Maybe not', 
    'Do not do this', 
    'I like you'
];

let randomPhraseSplit = null

// This function gets us random Phrase and then splits it into array of characters //

function getRandomPhraseAsArray(arr) {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    let randomPhraseSplit = randomPhrase.split("");
    return randomPhraseSplit
};

console.log(getRandomPhraseAsArray(phrases))
// do stuff any arr that is passed in, and add to `#phrase ul

function addPhraseToDisplay(arr){
    for (let i=0; i < arr.length; i++) {
        let randomPhraseSplit[i]
    }

};


function checkLetter(button) {
    let allLi = document.getElementsByTagName('li');
};

