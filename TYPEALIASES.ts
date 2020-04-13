type chars = string;

function show(param: chars): void {
    console.log(param);
}

show('Hello');


type  Product = { name: string, code: number};
let perm: Product = { name: 'Mong Ting', code: 2345};

console.log(perm);


type strrr = (input: string, input1) => string;

let rem: strrr = function(str: string, i: number): string{
    return str.substring(i);
}

let s = rem('Mong', 3);
console.log(s);


type stat = [string, boolean];

let  st: stat = ["yes", true];

console.log(st);