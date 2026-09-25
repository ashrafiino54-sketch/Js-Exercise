

let fruits =["apple", "banana", "cherry"];

let result = fruits.map(fruit => {
    return fruit + " " + fruit.length;
});

console.log(result);