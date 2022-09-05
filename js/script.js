'use strict';
const exampleFunc = (n) =>{
  let num = n;
 return function getResult (number){
   return num += number;

 };
}
let calc1 = exampleFunc(3);

let calc2 = exampleFunc(6);

console.log(calc1(5));
console.log(calc1(20));
console.log(calc2(4));
