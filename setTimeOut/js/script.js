//setTimeOut
// it's a function that executes after  a specific time.

// Anonamous function
// setTimeout(function (){
//     console.log("hello world")
// }, 5000);


// Works the same as the above
function logHello(){
    console.log("Hola");
}
setTimeout (logHello, 5000);


// 1. select the loader
const loading = document.querySelector(".loader")
console.log("i selected the loader element", loading);

// 2. use setTimeOut
setTimeout (function () {
    // 3. change the innerHTML of the Loading
    loading.innerHTML = "Finished loading"
}, 5000);

const countContainer = document.querySelector(".counter");

let timeLeft = 10;
