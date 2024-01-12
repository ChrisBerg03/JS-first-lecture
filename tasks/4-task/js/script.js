const darkModeBtn = document.getElementById("modeBtn");

const body = document.querySelector("body");

let isDarkMode = false;

function toggleMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.style.backgroundColor = "#0A0A0A";
        darkModeBtn.style.border = "2px solid #fff"
        darkModeBtn.style.color = "#000"
        darkModeBtn.style.backgroundColor = "#fff"
    } else {
        body.style.backgroundColor = "#fff";
        darkModeBtn.style.border = "2px solid #000"
        darkModeBtn.style.color = "#fff"
        darkModeBtn.style.backgroundColor = "#333"
    }
    console.log("isDarkMode after is clicked", isDarkMode);
}

darkModeBtn.addEventListener("click", toggleMode);
