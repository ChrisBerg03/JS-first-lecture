const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

let html = "";

const bookContainer = document.querySelector(".book-container");
console.log("bookcontainer", bookContainer);

const totalItemsOfBooks = books.length;
console.log("The total items of books",totalItemsOfBooks);

for (let i = 0; i < totalItemsOfBooks; i++) {
    console.log(books[i].title);
    console.log(books[i].author);

    html += `
        <div>
            <h2 class = "book book-details">Title: ${books[i].title}</h2>
            <p class = "author">Author: ${books[i].author}</p>
            <p class = "availability">Available: ${books[i].avaiable ? "Yes, this item is available" : "No, this item is currently out of stock"}</p>
        </div>
    `
};
console.log(html);

bookContainer.innerHTML = html;