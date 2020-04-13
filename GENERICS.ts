function genArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numarray = genArray<number>([100,200,300]);
let stringarray = genArray<string>(["Hello", "World"]);

numarray.push(400);
num.push('Mong'); //error

stringarray.push('Mong');
stringarray.push(12); //error



function type<X,Y> (id: X, name: Y): void {
    console.log(typeof(id) + " " + typeof(name));
}

type<number, string>(10, 'Mong');


class p{
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string){
        this.firstName = fname;
        this.lastName = lname;
    }
}

function displayValue<T extends p>(pe: T): void {
    console.log(pe.firstName + " " + pe.lastName);
}

let per = new p('Mong','Ting');
displayValue(per);
displayValue("Wong TIng"); // error
