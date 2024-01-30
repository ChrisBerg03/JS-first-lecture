let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let evenNumbers = numbers.filter(function (even) {
    return even % 2 == 0;
});

console.log(evenNumbers);

let greaterNumbers = numbers.filter(function (greater) {
    return greater > 5;
});

console.log(greaterNumbers);

let lessNumbers = numbers.filter(function (less) {
    return less < 5;
});

console.log(lessNumbers);
