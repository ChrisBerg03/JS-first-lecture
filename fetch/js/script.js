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
        return httpResponse.json();
    })
    .then((todoResult) => {
        // do something with the data. we store it in the todos variable.
        console.log(todoResult);
        todos = todoResult;
    });
