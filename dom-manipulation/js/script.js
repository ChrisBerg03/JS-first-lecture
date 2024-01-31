// Select the h2

// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element by class
const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element by id #list using queryselector.
const ulGetList = document.querySelector("#list");
console.log(ulGetList);

// 4. Select element by is #list using getElementById
const listById = document.getElementById("list");
console.log(listById);

// 5. only select the first li we encouter.
const listedItem = document.querySelector("li");
console.log(listedItem);

// 6. select multiple li's
const listedItems = document.querySelectorAll("li");
console.log(listedItems);

// select the h1 and change color to red
const heading1 = document.querySelector("h1");
console.log("before i change color");
console.dir(heading1);
heading1.style.color = "red";
heading1.style.border = "solid 10px red";
heading1.style.padding = "1rem";
heading1.style.backgroundColor = "blue";

// select an empty div and give it a class of .container
const myDiv = document.querySelector("div");
console.dir(myDiv);
myDiv.classList.add("container");

// changing the h1 text
heading1.innerText = "I want beer";

heading2.innerHTML = `<span>I want more beer</span>`;

//                        0         1         2         3
const myArrayOfNames = ["hesh", "kjetil", "jonas", "berkyboi"];
// console.log(myArrayOfNames[0]);
// console.log(myArrayOfNames[1]);
// console.log(myArrayOfNames[2]);
// console.log(myArrayOfNames[3]);

for (let i = 0; i < myArrayOfNames.length; i++) {
    console.log(myArrayOfNames[i]);
}

// i = 0 (the first number)
// 0 < 3 (if 0 is less than the total number)
// i = 0 + 1 = 1 (i++ will add 1 and continue to the next)
// console.log(myArrayOfNames[1]) (will log the arrayOfNames)

for (let i = 1; i <= 100; i++) {
    console.log(i);
} // will count to 100

// = +  ++

// addition

// 10 + 5

let sumAddition = 10 + 5;
console.log(sumAddition);

let sumSubtraction = 10 - 5;
console.log(sumSubtraction);

let sumMultiplication = 10 * 5;
console.log(sumMultiplication);

let sumDivition = 10 / 5;
console.log(sumDivition);

// modulus
let sumRemain = 10 % 3; // the remaining (1)
console.log(sumRemain);

// simple operators

// simple assignment
let a = 5;
let b = 10;
console.log(a + b);

// addition assignment (+=)
let c = 15;
c += 5;

// subtraction assignment (-=)
// let c = 15;

// c -= 5;

// c = c - 5;

// comparison operators

// equal to (==)

let isEqual = 5 == "5";
console.log(isEqual); // true

// strict equal (===)
let isStrictEqual = 5 === "5";
console.log(isStrictEqual);

// not equal (!=)

let notEqual = 5 != 6;
console.log(notEqual);

// greaterthan

let isGreaterThan = 10 > 5;
console.log(isGreaterThan);

// AND  // OR
// &&   // ||

let andResult = 5 > 3 && 10 > 5;
console.log(andResult);

// false   // true
let orResult = 5 > 10 || 20 > 5;
console.log(orResult);

// Not
!(5 > 10); // true

let changeColor = (document.querySelector("#colorChange").onmouseenter =
    function () {
        mouseEnter();
    });

let changeColor2 = (document.querySelector("#colorChange").onmouseleave =
    function () {
        mouseLeave();
    });
let body = document.querySelector("body");

function mouseEnter() {
    body.style.backgroundColor = "red";
}

function mouseLeave() {
    body.style.backgroundColor = "#666w";
}
