// // void
// function doSomeThing() {
//     console.log("i just do something  --- Void");
// }
// doSomeThing();

// // void with some paramaters
// function doSomethingWithData(somedata) {
//     console.log("i just do something. here it is " + somedata);
// }

// doSomethingWithData("Sweet");

// // Return
// function doSomeThingThatReturnsAString() {
//     return "this is easy";
// }

// let result = doSomeThingThatReturnsAString() + doSomeThingThatReturnsAString();

// console.log(result);

// function doSomeThingThatReturnsAString(someData) {
//     return "this is easy" + someData;
// }

// let result2 = doSomeThingThatReturnsAString(" Yessir");
// console.log(result2);

function doSomethingDope(someParam) {
    console.log("i do something");
    someParam();
    console.log("i do something");
}

doSomethingDope(function () {
    console.log("i am a callback");
    console.log("i am a callback");
    console.log("i am a callback");
});

fetch("https://catfact.ninja/facts");

console.log("hello");

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
