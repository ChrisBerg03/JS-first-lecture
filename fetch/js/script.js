// data -- show it to the user

let todo = fetch(
    "https://jsonplaceholder.typicode.com/todos",
    function (response) {
        console.log(response);
    }
);
