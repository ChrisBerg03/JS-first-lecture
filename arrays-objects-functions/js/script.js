// Arrays
const fruits = ["Apple", "watermelon", "orange", "grape"];
console.log(fruits.length); // total of 4 fruits

fruits.push("banana"); // adding new item to the end of the array
console.log(fruits);

fruits.unshift("mango"); // adding new item to the beginning of the array
console.log(fruits);

// remove the last item in the array
fruits.pop();
console.log("using pop : ",fruits)

fruits.shift(); // remove item from the start of the array
console.log(fruits);


const numbers = [3, 4, 100, 88, 53, 62];

numbers.sort(function(a, b){return a - b});
console.log(numbers);


let animal = "dog";
console.log(animal.length);

const cars = ["bmw", "audi", "volvo", "Vw"];
console.log("the index of audi" ,cars.indexOf("audi"));






// .objects

const user = {
    name : "Chris",
    age : 21,
    job : "Software Engineer",
    wealth : "Rich"
};

console.log(user);
console.log(user.name, user.age);


// hello my name is monde and i'm 30 years old, i am rich and i work as a software engineer.

const someText = "hello my name is " + (user.name) + " and i'm " + (user.age) + " years old, i'm " + (user.wealth) + " and i work as a " + (user.job);
console.log("someText",someText);


const someTextTwo = `hello my name is ${user.name} and i'm ${user.age} years old, i'm ${user.wealth} and i work as a ${user.job}`;
console.log("someTextTwo",someTextTwo);



const books = [
    {
        title: "book one",
        author: "Autor one",
        releaseDate: "2001",
        pages: 300
    },
    {
        title: "book otwo",
        author: "Autor two",
        releaseDate: "2003",
        pages: 500
    },
    {
        title: "book three",
        author: "Autor three",
        releaseDate: "2010",
        pages: 1000
    }
];

const bookSearch = books.find(function (book){
    // return book.title.toLowerCase() === ("book one").toLowerCase();
    return book.pages >= 300;
});
console.log("searchbook",bookSearch);


// console.log("my first book",books[0])
// console.log("my second book",books[1])
// console.log("my third book",books[2])



// function is a set of actions or code when we call the functions name.

function doorBell (withCamera) {
    console.log("i will go and open the door" + withCamera);
};

doorBell(" Motion detected");

function logWord (theWord){
    console.log (theWord)
};

function addTwoNumbers (num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);

console.log(sum);