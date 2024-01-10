
// 1. variables
// ecmascript 5
var name = "Chris"

// ES 5
var name = "chris";

// ES 6
let secondName = "Tom";

secondName = "alex";

const thirdName = "Mario"

// thirdName = "Luigi"; This is not possible. because it's defined with const.

// 2. How to use console.log -- console.dir -- console.info -- console.error

// 3. >= <= =  == 
"H" == "h" //true

"A" === "a" // false  has to be identical

// 4. condition
// if() {}

// switch case

// 5. objects

let car = {
    color: "red",
    model: "bmw",
    year: "1992"
};
console.log(car.color);

console.log(car["year"]);

for(let i = 1; i <= 5; i++) {
    console.log(i);
};


// 6. array basically a big container

let netflixActionMovies = [
    "action1",
    "action2",
    "action3",
    "action4",
    "action5",
    "action6",
    "action7",
    "action8"
];

console.log(netflixActionMovies);

const lastItemIndex = netflixActionMovies.length - 1; // to find the last item.
console.log(lastItemIndex); 

for(let i = 0; i < netflixActionMovies.length; i++) {
    console.log(netflixActionMovies[i])
};


// 7. concatination
let fourthName = "Hesh";
let fifthName = "Berk";
let sixthName = "Frank";

const myParagraph = `hello my name is ${fourthName} and my friend is ${fifthName}`
console.log("Using backticks: ",myParagraph);


// 8. function

function logWord() {
    if (name !== undefined) {
    console.log("Hello world"); }
    else {
        console.log("Sorry")
    }
}

logWord();

function logWordTwo(name) {
    console.log("Hello " + name + " world")
}
logWordTwo("Chris");


