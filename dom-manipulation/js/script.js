// Select the h2

// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);


// 2. Select element by class
const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);


// 3. Select element by id #list using queryselector.
const ulGetList = document.querySelector("#list");
console.log(ulGetList);


// 4. Select element by is #list using getElementById
const listById = document.getElementById("list");
console.log(listById);


// 5. only select the first li we encouter.
const listedItem = document.querySelector("li");
console.log(listedItem);


// 6. select multiple li's
const listedItems = document.querySelectorAll("li");
console.log(listedItems);

// select the h1 and change color to red
const heading1 = document.querySelector("h1");
console.log("first heading: ",heading1);