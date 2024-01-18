import productsData from "./data/products.js";

// select the products container

const productContainer = document.querySelector(".container");

const mySavedFavs = getFavs ();


// 2. fill the container with products. The Data element passes the data from html to js so we can save it later in the localstorage.

for (let i = 0; i < productsData.length; i++) {    
    let cssClass = "";
    
    const doesObjectExisit = mySavedFavs.find(function (favs)
    {
        return parseInt(favs.id) === productsData[i].id
    });
    productContainer.innerHTML += `
    <div class="product">
    <h3>Crack</h3>
            <img
        class="prodImage"
        alt="hehe"
        src="/favorite-page/images/hehe.png"
    />
    <h2>${productsData[i].name}</h2>
    <h4>${productsData[i].price} Nok</h4>
    
    <span class="like">
    <svg class="heart $cssClass"
    data-name="${productsData[i].name}"
    data-id="${productsData[i].id}"
    data-price="${productsData[i].price}"
    xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"
        stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>
    </span>
</div>
    `;
}

let favs = [];

// select all the heartsa
const favorite = document.querySelectorAll(".heart");
for (let x = 0; x < favorite.length; x++) {
    favorite[x].addEventListener("click", function () {
        this.classList.toggle("active-heart");
        console.log(this.dataset.name);

         favs.push({
                 name: this.dataset.name,
                 id: this.dataset.id,
                 price: this.dataset.price
             });
             saveFavs(favs);
    });
}

function saveFavs(favs) {
    window.localStorage.setItem("favorite", JSON.stringify(favs));
}

function getFavs () {
    // get the items of the fav from the local storage
    // it will check if the favs is toggled on or off.
    // if it's on it will stay on if refreshed.

    const savedFavs = window.localStorage.getItem("favorites");
    if (!savedFavs) {
        return []
    } else {
        return JSON.parse(savedFavs);
    };
}