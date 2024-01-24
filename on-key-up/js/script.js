const submitBTN = document.querySelector(".submitBTN");
const firstName = document.querySelector("#firstName")
const firstNameErrorMessage = document.querySelector(".emojiFeeling");
const body = document.querySelector("body");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

firstName.onkeyup = function(event) {
    let firstNameValue = event.target.value;
    if(firstNameValue.length >= 5) {
        submitBTN.disabled = false;
        submitBTN.innerHTML = "Good name";
        submitBTN.style.backgroundColor = "green";
        firstNameErrorMessage.innerHTML = "😀"
        body.classList.add("rainbowThing");

    } else {
        submitBTN.disalbed = true;
        submitBTN.innerHTML = "Your name is too short";
        submitBTN.style.backgroundColor = "red";
        submitBTN.style.color = "white";
        firstNameErrorMessage.innerHTML = "🥲"
    }
}
