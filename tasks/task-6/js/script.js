const date = new Date();
console.log(date);
const body = document.querySelector("body");

body.innerHTML += `<p>${date}</p>`;
