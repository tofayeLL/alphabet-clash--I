




function handleKeyboardButtonPress (){
    console.log('button press')
}

// captured keyboard keypress
document.addEventListener('keyup', handleKeyboardButtonPress);

// after play function then continuegame() function 
function continueGame(){
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
function play(){
   hiddenClassAdded('home-screen');
   hiddenClassRemove('play-ground');
   continueGame();
}


// for get random alphabet
function getRandomAlphabet(){
    // create a random alphabet array
    const alphabetString = 'makwltopciqnzdjrhcuxebgfsv';
    const alphabets = alphabetString.split('');
    

    // get a random index between 0 - 25;
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    const randomAlphabet = alphabets[randomIndex];
   
    return randomAlphabet;
    
}


