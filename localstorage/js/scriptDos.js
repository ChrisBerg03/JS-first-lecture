const myName = window.localStorage.getItem("name");

console.log(myName);

const myCar = window.localStorage.getItem("myCar"); 

console.log(myCar)

myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);