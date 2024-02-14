
// for hidden class add and hidden class remove reusable function
function hiddenClassAdded(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function hiddenClassRemove(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// set background color reusable function
function setBackgroundcolor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#ffa500]');
}

// remove background color
function removeBackgroundcolor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#ffa500]');

}

// score and life element get
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const elementValue = parseInt(elementValueText);
    return elementValue;
}


// to set value as a inner text any element
function setTextElementValueById(elementId, elementValue) {
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}

// get inner text from an element
function getElementInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const innerText = element.innerText;
    return innerText;

}


// for get random alphabet
function getRandomAlphabet() {
    // create a random alphabet array
    const alphabetString = 'makwltopciqnzdjrhcuxebgfsv';
    const alphabets = alphabetString.split('');

    // get a random index between 0 - 25;
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    const randomAlphabet = alphabets[randomIndex];

    return randomAlphabet;

}









