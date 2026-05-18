console.log(greeting); // Ouput : undefined
var greeting = "Hello"; 
console.log(greeting); // Outout : "Hello"


// Behind the Scenes: 
// var greeting; , <-- hoisted with undefined.
// console.log(greeting); <-- undefined
// greeting = "Hello"; <-- assignment stays in place
// console.log(greeting); < -- "Hello"