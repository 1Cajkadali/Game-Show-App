const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

let missed = 0;

const startGame = document.getElementsByClassName('btn__reset')[0];

startGame.addEventListener('click', function() {
    document.getElementById('overlay').style.display ="none";
});
