const name = "John";
const age = 27;

// console.log(`Cześć, mam na imie ${name} i mam ${age} lat`);

//const emptyParagraph = document.querySelector('.main-section__description--js');
//emptyParagraph.innerHTML = `Cześć, mam na imie ${name} i mam ${age} lat`;

// function greet(age, name) {
//     return `Cześć, mam na imie ${name} i mam ${age} lat`;
// }

//Notacja fat arrow function
const greet = (age, name) => {
    console.log(`Cześć, mam na imie ${name} i mam ${age} lat`);
}

greet(age, name);

function createContent(selector, content) {
    const emptySelector = document.querySelector(selector);
    emptySelector.innerHTML = content;
}

createContent('.main-section__description--js', 'Hello World!');