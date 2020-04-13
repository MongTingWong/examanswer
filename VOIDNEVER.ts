//Example 1

function check(): void {
    console.log("CHECK");
}


//Exmaple 2
function printer2(): never {
    while (true) {
      console.log("I am printing too");
    }
}
  

//Example 3
let test1: any = check();
console.log(test1); // undefined
  
let test2 = printer2();
console.log(test2); // null
  