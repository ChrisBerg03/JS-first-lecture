const getCoffee = window.localStorage.getItem("coffeeM");
console.log(getCoffee);

const getCoffeeParsed = JSON.parse(getCoffee);
console.log(getCoffeeParsed);



const getShoppingList = window.localStorage.getItem("shoppingList");
console.log(getShoppingList);

const getShoppingListParsed = JSON.parse(getShoppingList);
console.log(getShoppingListParsed);