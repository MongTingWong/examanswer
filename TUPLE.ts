//Example 1

let mytuple = [10,"Hello"]; 
console.log(mytuple[0]) 
console.log(mytuple[1])

//Exmaple 2

let tuple: [string, boolean, string[]];

let strArray: string[] = ["MONG", "TING"];

tuple = ["HI", true, strArray];

console.log(tuple);


//Example 3

let a =[10,"hello"] ;
let  [b,c] = a ;
console.log(b); //10  
console.log(c); //'hello'