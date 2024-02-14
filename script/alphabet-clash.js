
function handleKeyboardPressButton(event) {
    const playerPressed = event.key;

    // press escape key then the game will be over
    if (playerPressed === 'Escape') {
        gameOver();
    }

    const displayAlphabet = document.getElementById('display-alphabet');
    const alphabet = displayAlphabet.innerText;
    const alphabetToSmall = alphabet.toLocaleLowerCase();


    // check condition
    if (playerPressed === alphabetToSmall) {
        console.log('wow you will get a point');

        // update score
        const currentScore = getTextElementValueById('score');
        const updateScore = currentScore + 1;
        setTextElementValueById('score', updateScore);

        // continue play game
        removeBackgroundcolor(alphabetToSmall);
        continueGame();
    }
    else {
        console.log('opps!! you lose a life');

        // update life
        const currentLife = getTextElementValueById('life');
        const updateLife = currentLife - 1;
        setTextElementValueById('life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }

    }
}


// capture user key pressed 
document.addEventListener('keyup', handleKeyboardPressButton);

// after play function then continuegame() function 
function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

    // display current random alphabet
    const displayAlphabet = document.getElementById('display-alphabet');
    displayAlphabet.innerText = alphabet;

    // set background color on alphabet
    setBackgroundcolor(alphabet);
}


// for starting play 
function play() {
    // hide ground
    hiddenClassAdded('home-screen');
    hiddenClassAdded('final-score-board')
    hiddenClassRemove('play-ground');

    /* reset score */
    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);

    continueGame();
}


function gameOver() {

    hiddenClassAdded('play-ground');
    hiddenClassRemove('final-score-board');
    const score = getTextElementValueById('score')
    setTextElementValueById('final-update-score', score);

    // current alphabet inner text
    const alphabet = getElementInnerTextById('display-alphabet');
    removeBackgroundcolor(alphabet);

}





