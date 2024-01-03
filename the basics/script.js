// Variables var, let or const (stores data)

var myName = "Chris";
console.log(myName); //output Chris

let age = 20;
console.log(age); //output 20
console.log(typeof age); //to display what type of data is being displayed

const BRAND = "BMW";
console.log(BRAND); //output BMW

// Data types

let greeting = "Hello, World!";
console.log(typeof greeting); //to know what type of data

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // displays boolean (yes or no / true or false)

let someVar;
console.log(typeof someVar); // Outputs undefined because we haven't defined let

let emptyValue = null;
console.log(typeof emptyValue);

// Object 

let person = {
    firstName: "Chris",
    lastName: "Berg",
    age: "20",
    sex: "all the time"
};

console.log(person);
console.log(typeof person);

let car = {
    brand: "Volvo",
    condition: "Used",
    year: "1992",
    price: "$10k"
};

console.log(car);
console.log(car.brand);
console.log(car["brand"]);
console.log(car.condition);
console.log(car.year);

console.log("i have a " + car.brand + " and it's " + car.condition);

console.log(`i have a ${car.brand} and it's ${car.condition}`);

// Array

let colors = [
    "Red",
    "Blue",
    "Green",
    "Purple",
    "pink"
];

let random = [
    "bwm", // 0
    "audi", // 1
    { name: "Chris", age: 20}, //2
    ["arm", "leg", "head"] //3
];
console.log(random[0]) // this will dispay the first item. starts from 0

// type convertion

let year = "2003"; // String
console.log(year);

// from string to number

let convertedYear = parseInt(year); // ParseInt converts string to number 
console.log(convertedYear);


// convert from number to string

let num = 20; // String

let convertedNumber = num.toString(); // Number to string

console.log(convertedNumber);



var city = "Jessheim";
console.log(city);

let ageTwo = 20;
console.log(ageTwo);

const birthYear = 2003;
console.log(birthYear);

// var greetingTwo = "welcome";
// console.log(greeingTwo);


var quantity = 3;
console.log(quantity);


let isJavaScriptFun = true;
console.log(isJavaScriptFun);


let thisIsUndefined;
console.log(thisIsUndefined);


let emptyValueTwo = null;
console.log(emptyValueTwo);

let numString = "25";
console.log(numString);

let convertedNumString = parseInt(numString);
console.log(convertedNumString);

let numTwo = 50;
console.log(numTwo);

let convertedNumTwo = numTwo.toString(); // Number to string
console.log(convertedNumTwo);

console.log(convertedNumString + numTwo);
console.log(numString + convertedNumTwo);



// this will change the box color
function redBox(){
    document.getElementById("box").style.backgroundColor = "red" 
};

function blueBox(){
    document.getElementById("box").style.backgroundColor = "blue" 
};
