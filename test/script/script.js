const num = document.querySelector("#inputField");
const numBTN = document.querySelector("#inputBTN");

num.addEventListener("input", function () {
    let val = num.value;
    if (val <= 5) {
        console.log("You fail");
    } else {
        console.log("You Win");
    }
});
