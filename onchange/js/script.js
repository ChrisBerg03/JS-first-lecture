const dropdown = document.querySelector("#circles");
const circlesContainer = document.querySelector(".circles-container");

dropdown.onchange = function() {
    circlesContainer.innerHTML = "";
    for (let i = 0; i <= this.value; i++) {
        circlesContainer.innerHTML += `
        <div class="cirlce">${i}</div>
        `
    }
};