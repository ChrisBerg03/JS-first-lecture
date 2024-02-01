// data -- show it to the user
let todos = [];
let todo = fetch(
    "https://jsonplaceholder.typicode.com/todos",
    function (response) {
        console.log(response);
    }
)
    .then((httpResponse) => {
        // extract the data using JSON
        console.log(httpResponse);
        return httpResponse.json();
    })
    .then((httpResponse) => {
        console.log(httpResponse);
    });

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
}).then((httpResponse) => console.log(httpResponse));

fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "DELETE",

    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
}).then((httpResponse) => console.log(httpResponse));

// ---- go fetch a promise to forward to .then.

// ---- await going to fetch

// ---- forward to the next line
