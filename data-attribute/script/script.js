const article = document.querySelector("#post");
const clickEvent = document.querySelector(".postBTN");
const clickEventTwo = document.querySelector(".postBTNTwo");
const dropDown = document.querySelector(".dropDownMenu");
const listBTN = document.querySelector(".dropDownListMenu");
const changeColorBTN = document.querySelector(".changeColor");
const body = document.querySelector("body");
const postIMG = document.querySelector("img");
const mainNav = document.querySelectorAll(".main-nav");
const mainLi = document.querySelectorAll("li");

clickEvent.onclick = function() {
    alert(`${article.dataset.author} ${article.dataset.category}`)
}

clickEventTwo.onclick = function() {
    alert(`${article.dataset.message}`)
};

listBTN.onclick = function() {
    dropDown.classList.toggle("dropDownMenu");
}

changeColorBTN.onclick = function() {
    // body.classList.toggle("addColor");
    if(body.style.backgroundColor === "red") {
        body.style.backgroundColor = "#666";
    } else {
        body.style.backgroundColor = "red";
    }
}

postIMG.addEventListener("click", function(){
    window.open(postIMG.dataset.fullsize);
} )