// function expressions
// function assigned to a variable

const someFunction = function () {
    console.log("function assigned to a variable");
}
someFunction();


someOtherFunction();
// normal function
function someOtherFunction() {
    console.log("normal function");
}


// addEventListener
const button = document.querySelector(".btn");

button.addEventListener("click", handleClick);


function handleClick() {
        console.log("button is clicked");
}


button.onclick = function () {
    console.log("I'm click using onclick");
}


button.onclick = function(event) {
    console.log(event.target.value);
    console.log(this.value);
}


// key presses

// onKeyDown  the event will trigger when this is pressed
// onKeyUp  the event will trigger when the key is released
// onKeyPress


const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function(eventTwo) {
    console.log(this.value);
    console.log(eventTwo.target.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);


const hoverButton = document.querySelector(".pet-btn");

const handleMouseOver = function(){
    this.style.backgroundColor = "red";
}

const handleMouseOut = function(){
    this.style.backgroundColor = "";
}

hoverButton.addEventListener("mouseover", handleMouseOver);
hoverButton.addEventListener("mouseout", handleMouseOut);