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