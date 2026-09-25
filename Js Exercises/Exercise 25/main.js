
// spread and Rest Ex25

const numbers =[1,2,3];
const num = [... numbers, 4,5,6 ];
console.log(num);



function multiple(...numbers) {
    return numbers.reduce((total, num) =>total*num,1);
}
console.log(multiple(5,10,2));
