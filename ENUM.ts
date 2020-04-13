//Exmaple 1

enum color{
    r,
    g,
    b
}

let z: color = color.g;

console.log(z);

//Exmaple: 2


enum color1{
    r1 = 5,
    g1,
    b1
}

let z1: color1 = color1.g1;

console.log(z1);

//Example: 3

enum Color3 {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color3[2];

console.log(colorName);