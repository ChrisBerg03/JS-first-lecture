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