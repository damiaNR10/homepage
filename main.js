const name = "John";
const age = 27;

console.log(`Cześć, mam na imie ${name} i mam ${age} lat`);

const heading = document.querySelector('.main-heading--js');
heading.innerHTML = `Cześć, mam na imie ${name} i mam ${age} lat`;