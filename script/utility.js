

function hiddenClassAdded(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function hiddenClassRemove(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// background color

function setBackgroundcolor(elementId){
    const element = document.getElementById(elementId);
    element.style.backgroundColor = '#ffa500'
}