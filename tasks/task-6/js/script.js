const date = new Date();
const body = document.querySelector("body");

body.innerHTML += `<p>${date.getDay()} ${date.getMonth()} ${date.getFullYear()}</p>`;
