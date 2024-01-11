function addNumbers(a, b, c) {
    return a + b + c;
}

let sum = addNumbers(10, 20, 30);

console.log("result" ,sum);




function multiplyNumber(d, e, f) {
    return d * e * f;
}

let sumOfMultiply = multiplyNumber(10, 10, 2);

console.log("multiply sum" ,sumOfMultiply);


let heading = document.querySelector("h1");
let buttonChangeText = document.querySelector("button");
let buttonChangeColor = document.querySelector(".colors");
let changeBody = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "It's almost friday";
}
buttonChangeText.onclick = changeHeading;


function changeColor() {
    changeBody.style.backgroundColor = "red";
}

buttonChangeColor.onclick = changeColor

const pet = {
    type: "cat",
    name: "titty",
    age: 10,
    meowmeow: function() {
        console.log("cat sound")
    }
};

let meowButton = document.querySelector(".meow");

function runMeowButton() {
    pet.meowmeow();
}