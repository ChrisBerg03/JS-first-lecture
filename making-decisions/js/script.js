// If and else statements

let temp = 30;

if (temp >= 30) {
    console.log("it's hot")
} else if (temp >=20) {
    console.log("the weather is nice")
} else {
    console.log("It's cold af!!")
}

let grade = 80;

if (grade >= 80) {
    console.log("Perfect, \n" + "You got a score of " + grade)
} else if (grade >= 50) {
    console.log("good job")
} else if (grade >= 30) {
    console.log("Almost a dumb bitch")
} else {
    console.log("Dumb bitch")
}


// 2. switch case

let color = "red";

switch (color) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("get ready");
        break;
    case "green":
        console.log("GO!");
        break;
    default:
        console.log("Full speed")
}

let gradeScore = "A"
gradeScore = gradeScore.toUpperCase();

switch (gradeScore) {
    case "A":
        console.log("Outstanding");
        break;
    case "B":
        console.log("Very good");
        break;
    case "C":
        console.log("Good effort");
        break;
    case "D":
        console.log("Need improvment");
        break;
    case "F":
        console.log("Fail");
        break;
    default: 
        console.log("Not graded yet")
}


// 3. Scope  var, const and let

var nameOne = "Chris";  // global Scope

if(true) {
    var nameOne ="hi";
    console.log(nameOne);
}
console.log(nameOne);


let nameTwo = "Chris";  // function Scope
if(true) {
    let nameTwo ="hi";
    console.log(nameTwo);
}
console.log(nameTwo);


const GRADETWO = "A"; // can not be changed with const (use let if it need to be changed later)

// GRADETWO = "B";
// console.log(GRADETWO); // will return an error


if(true){
    const GRAVITY = "100";
    console.log(GRAVITY);
}
// console.log(GRAVITY);  // returns an error because the gravity key is defined by const which is inside functionscope{}.