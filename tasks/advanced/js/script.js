let user = {}

user.name = "Jonas";
user.surname = "the Great";
user.name = "Chris";
console.log(user);


delete user.name;
console.log(user);

let randomObject = {

}

function isEmpty(obj) {
    for(let key in obj) {
        return false
    } 
    return true;
}

const isMyObjectEmpty = isEmpty(randomObject);
console.log(isMyObjectEmpty);

const arr = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90]

arr.sort(function(a, b){return a- b}) // sort in order
console.log(arr);

console.log(arr[0]); // choose the first num in the array

console.log(arr[arr.length - 1]); // choose the last item in the array. 

let evenAndPossitive = [];

for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        if (arr[i] > 1) {
            evenAndPossitive.push(arr[i]);
        }
    }
}

console.log(evenAndPossitive);