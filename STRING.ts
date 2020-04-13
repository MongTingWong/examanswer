
//Example 1
let str = new String("This is string");

console.log(str.charAt(0));
console.log(str.charAt(5));
console.log(str.charAt(3));

//Example 2
let str2 = new String("This is string");
let str4 = new String("This is string");

let str5 = str2.concat(str4.toString());
console.log(str5);


//Example 3
let str3 = "Apples are round, and apples are juicy."; 

let  sliced = str3.slice(3, -2); 
console.log(sliced);