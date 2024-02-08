let duck = {
    id: 1,
    name: "Frank",
    color: "Yellow",
    height: 25,
    habitat: "pond",
    diet: "green stuff",
};

let duckName = duck.name;
let duckHeight = duck.height;
let duckDiet = duck.diet;
console.log("The duck's name is " + duckName);
console.log("The duck's height is " + duckHeight + "cm");
console.log("The duck's diet is " + duckDiet);

// this is the same as above but much easier and less code
let { name, diet, height } = duck;

console.log(name);
console.log(height);
console.log(diet);

// same as above but with arrays (different syntax)
let array = [2, 5, 6, 8, 7];
let [num1, num2, num3, num4, num5] = array;
console.log(num1);

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 5, 5, 5, 5, 5, 5, 5));
