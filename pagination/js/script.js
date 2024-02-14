const container = document.querySelector(".container");

const bookArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunk = 2;
const chunkArray = [];

for (let i = 0; i < bookArray.length; i += chunk) {
    const chunks = bookArray.slice(i, i + chunk);
    chunkArray.push(chunks);
}

// for (let i = 0; i < 50; i++) {
//     const addDiv = document.createElement("div");
//     container.appendChild(addDiv);
// }
