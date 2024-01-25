const restrictedContentContainer = document.querySelector(".restrictionContainer");
const restrictedContentMessage = document.querySelector(".restrictionMessage");
const restrictedContentBTN = document.querySelector(".confirmAge");
const ageConfirmationInput = document.querySelector(".ageInput");

restrictedContentBTN.addEventListener("click", function() {
    const ageResult = ageConfirmationInput.value;  
    const isAgeOk = isOldEnough(ageResult);
    console.log(isAgeOk);
    if (isAgeOk) {
        restrictedContentContainer.style.display = "none"
    } else {
        restrictedContentMessage.innerHTML += `You do not meet the age requirement`
    }
})

function isOldEnough(ageToCheck) {
    if(ageToCheck >= 18) {
        return true
    }
    return false;
}