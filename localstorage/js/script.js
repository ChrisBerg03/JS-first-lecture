// localstorage
// session storage

const myVariable = "some data";

window.localStorage.setItem("var1", myVariable);
window.localStorage.setItem("name", "Chris")

// save objects 
// save arrays

let car = {
    brand: "bmw",
    model: "2021",
    price: 10000
};



window.localStorage.setItem("myCar", JSON.stringify(car));


window.sessionStorage.setItem("fav", "bmw");

