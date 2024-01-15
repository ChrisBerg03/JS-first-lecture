// setinterval

// the setinterval executes the funcion at a certain time until we clear/stop it.

// let count = 0;
// const itemOne = setInterval(function() {
//     console.log("hello world");
//     count++; // increment
//     if(count === 5) {
//         clearInterval(itemOne);
//     }
// }, 1000);




let mailContainer = document.querySelector(".container")


let countSecond = 1;

const mailCount = setInterval(function () {

    countSecond++;
    mailContainer.innerHTML += `
    <li>You have ${countSecond} new mail</li>`
    if(countSecond === 10) {
        clearInterval(mailCount);
    }
}, 2000);

