
/* // my practice
function continuePlay() {
    // get  random alphabets by cal function
    const alphabets = randomAlphabetGet();
    console.log(alphabets);

    // to display alphabets
    const whereToDisplay = document.getElementById('display-alphabet');
    whereToDisplay.innerText = alphabets;

    // to set background color on alphabets keyboard by call function
    setBackColor(alphabets);


}


function playNow() {
    hiddenRemoveAdd('home-screen', 'play-ground');
    continuePlay();

}



// utility
// add hidden and remove hidden class
function hiddenRemoveAdd(elementId, elementId1) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

    const element1 = document.getElementById(elementId1);
    element1.classList.remove('hidden');
}

// get random alphabets
function randomAlphabetGet() {
    const alphaString = 'makwltopciqnzdjrhcuxebgfsv';
    const alphas = alphaString.split('');


    const randNumber = Math.random() * 25;
    const randindex = Math.round(randNumber);

    const randAlphas = alphas[randindex];
    return randAlphas;

}

// set background color
function setBackColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#ffa500]');

} */