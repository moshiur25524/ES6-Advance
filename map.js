const numbers = [4, 6, 8, 10];
let output = [];

// function doubleOld(number){
//     return number * 2;
// }

for ( const number of numbers){
    const result = doubleIt();
    output.push(result);
}

const doubleIt = number => number * 2;

// console.log(output);

// 1. loop through each element
// 2.for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map( number => number * 2);
const output = numbers.map(x => x*2);

console.log(output);