// data -- show it to the user
let todos = [];
let todo = fetch(
    "https://jsonplaceholder.typicode.com/todos",
    function (response) {
        console.log(response);
    }
)
    .then((httpResponse) => {
        // console.log(httpResponse);
        return httpResponse.json();
    })
    .then((todoResult) => {
        console.log(todoResult);
        todos = todoResult;
    });
