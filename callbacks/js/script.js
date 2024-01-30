
// void
function doSomeThing() {
    console.log("i just do something  --- Void")
}
doSomeThing();

// void with some paramaters
function doSomethingWithData(somedata) {
    console.log("i just do something. here it is " + somedata)
}

doSomethingWithData("Sweet");


// 
function doSomeThingThatReturnsAString() {
    return "this is easy";
}

let result = doSomeThingThatReturnsAString() + doSomeThingThatReturnsAString();

console.log(result);


function doSomeThingThatReturnsAString(someData) {
    return "this is easy" + someData;
}

let result2 = doSomeThingThatReturnsAString(" Yessir")
console.log(result2);