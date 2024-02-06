const num = document.querySelector("#inputField");
const numBTN = document.querySelector("#inputBTN");

numBTN.onclick = function checkNum() {
    if (num.value <= 129) {
        console.log("hehe midget");
    } else if (num.value <= 159) {
        console.log("midget+");
    } else if (num.value <= 179) {
        console.log("short king");
    } else {
        console.log("hmm, tall ish");
    }
};
