// variables are defined in this section.
const tagWholeTop = document.getElementById('header-name-tag');
const tagWholeBottom = document.getElementById('footer-name-tag');

const tagName = document.getElementById('name-tag-name');
const nameButton = document.getElementById('name-button');
const newName = document.getElementById('name-input');

const colorButton = document.getElementById('color-button');
const newColor = document.getElementById('color-selector');

const pronouns = document.getElementById('name-tag-pronouns');
const pronounButton = document.getElementById('pronoun-button');
const newPronouns = document.getElementById('pronoun-selector');
const customPronouns = document.getElementById('custom-pronouns');

const fontButton = document.getElementById('font-button');
const newFont = document.getElementById('font-selector');

const nameChangeNumber = document.getElementById('number-of-name-changes');

// NAME CHANGE 
// event listeners are setup in this section
nameButton.addEventListener('click', ()=>{
    // when button is clicked
    // get the value of the input
    let newNameValue = newName.value;
    //replace the text in the nametag with the value
    tagName.textContent = newNameValue;
    // number of name changes addition
    let nameNumber = Number(nameChangeNumber.textContent) + 1;
    nameChangeNumber.textContent = nameNumber;
});

// COLOR CHANGE
// event listeners are setup in this section
colorButton.addEventListener('click', ()=>{
    // when button is clicked
    // get the value of the input
    let newColorValue = newColor.value;
    //update the style of the background color with the value
    tagWholeTop.style.backgroundColor = newColorValue;
    tagWholeBottom.style.backgroundColor = newColorValue;
});

// PRONOUN CHANGE
// event listeners are setup in this section
pronounButton.addEventListener('click', ()=>{
    let newPronounValue = newPronouns.value;
    let newCustomValue = customPronouns.value;
    if (newPronounValue === 'Custom') {
        pronouns.textContent = newCustomValue;
    } else {
        pronouns.textContent = newPronounValue;
    }
});

// FONT CHANGE
// event listeners are setup in this section
fontButton.addEventListener('click', ()=>{
    // when button is clicked
    // get the value of the input
    let newFontValue = newFont.value;
    //replace the font style of the nametag with the value
    tagName.style.fontFamily = newFontValue;
    pronouns.style.fontFamily = newFontValue;
});