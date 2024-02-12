const num = document.querySelector("#inputField");
const numBTN = document.querySelector("#inputBTN");
const result = document.querySelector("#outputField");
const body = document.querySelector("body");

numBTN.onclick = function checkNum() {
    if (num.value <= 129) {
        result.innerText = `hehe Midget`;
        // console.log("hehe midget");
    } else if (num.value <= 159) {
        result.innerText = `Midget+`;
        // console.log("midget+");
    } else if (num.value <= 169) {
        result.innerText = `Short man`;
        // console.log("short king");
    } else if (num.value <= 179) {
        result.innerText = `Short King`;
        // console.log("short king");
    } else if (num.value <= 190) {
        result.innerText = `Langbein`;
        // console.log("short king");
    } else {
        result.innerText = `Keven`;
        body.classList.add("rainbow");
        alert("You are too tall");
    }
};
