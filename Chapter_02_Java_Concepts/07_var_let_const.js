//var, let, const
// var - Function Scoped
//  var a = 10; //Global Scope
// Console.log(a);


// //Definition of the function
// function printHello(){
//console.log("Hello World!");
//var a = 20; //Local Scope
//console.log(a);
//if(true){
//  var a = 30;
//  console.log(a); //30
//}
// console.Log("F ->",a);
//}

// Calling of the function
// printHello();

// let - Block Scoped
let b = 20;
console.log(b);

// Definition of the function
function printHello() {
  console.log("Hello World!");
  let b = 30; // Local Scope
  console.log(b);
  if (true) {
    let b = 5;
    console.log(b); // 5

  }
  console.log("let ->", b)
}

// calling of the function
printHello();
