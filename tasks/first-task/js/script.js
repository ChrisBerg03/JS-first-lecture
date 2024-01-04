const changeText = document.querySelector("h1");
changeText.innerHTML = "Welcome to JavaScript Class";
changeText.style.color = "blue";
changeText.style.fontSize = "3rem";
console.dir(changeText);


function addListItem(){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let node = document.createTextNode(`New item ${getRandomNumber(201)} `)
    li.appendChild(node);
    let element = document.getElementById("list");
    element.appendChild(li)
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}



// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// addListItem.addEventListener("click", function () {
//     let someRandomNumber = getRandomInt(220);

//     list.innerHTML += `<li>New Item ${someRandomNumber}</li>`
//     // list.innerHTML = list.innerHTML +  `<li>New Item</li>`
// });