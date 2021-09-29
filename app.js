// variables are defined in this section.
const tagName = document.getElementById('name-tag-name');
const nameButton = document.getElementById('name-button');
const newName = document.getElementById('name-input');

const color = document.getElementById('#');
const colorButton = document.getElementById('color-button');
const newColor = document.getElementById('color-selector');

const pronouns = document.getElementById('#');
const pronounButton = document.getElementById('pronoun-button');
const newPronouns = document.getElementById('pronoun-selector');

// NAME CHANGE 
// event listeners are setup in this section
nameButton.addEventListener('click', ()=>{
    // when button is clicked
    // get the value of the input
    let newNameValue = newName.value;
    //replace the text in the nametag with the value
    tagName.textContent = newNameValue;
});

// COLOR CHANGE
// event listeners are setup in this section
colorButton.addEventListener('click', ()=>{
    // when button is clicked
    // get the value of the input
    let newColorValue = newColor.value;
    //replace the text in the nametag with the value
    color.classList = newColorValue;
});

// PRONOUN CHANGE
// event listeners are setup in this section
pronounButton.addEventListener('click', ()=>{
    // when button is clicked
    // get the value of the input
    let newPronounValue = newPronouns.value;
    //replace the text in the nametag with the value
    pronouns.textContent = newPronounValue;
});