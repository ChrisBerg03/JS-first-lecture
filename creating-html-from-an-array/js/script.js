const pets = [
    {
        type: null,
        color: "brown",
        age: 10,
        friendly: true,
    },
    {
        color: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        color: "red",
        age: 20,
        friendly: false,
    },
];

const petContainer = document.querySelector(".pet-container");
console.log("petContainer: ", petContainer);

let html = "";

const totalItemsOfPets = pets.length;

console.log("totalItemsOfPets: ", totalItemsOfPets);

for (let i = 0; i < totalItemsOfPets; i++) {
    console.log(pets[i].color);
    console.log(pets[i].age);

    html += `
        <div class="pet pet-details">
            <p style="color: ${pets[i].color}">Color</p>
            <h2>Age: ${pets[i].age}</h2>
            <p>Friendly: ${pets[i].friendly ? "Yes it's friendly" : "No it's not friendly"}</p>
            <hr>
        </div>
    `
}
console.log(html);

petContainer.innerHTML = html;