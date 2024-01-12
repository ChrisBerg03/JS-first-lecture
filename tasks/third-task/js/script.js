let puddingFlavour = "Chocolate";
let coffee = {
    origin: "South Africa",
    intensity: "medium 7"
}

let shoppingList = ["coffee", "apples", "milk"]


window.localStorage.setItem("puddingFlavour", puddingFlavour);

window.localStorage.setItem("coffeeM", JSON.stringify(coffee));


window.localStorage.setItem("shoppingList", JSON.stringify(shoppingList));