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



for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
};

// i = 0 (the first number)
// 0 < 3 (if 0 is less than the total number)
// i = 0 + 1 = 1 (i++ will add 1 and continue to the next)
// console.log(myArrayOfNames[1]) (will log the arrayOfNames)