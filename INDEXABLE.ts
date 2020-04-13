interface Key {
    [key: string]: boolean
}
let kivi: Key = {'x1': true, 'y1': false};

console.log(kivi); // { x1: true, y1: false }



interface Key1 {
    [key: string]: any
}
let ka:Key1 = {};

ka.dateOfBirth = new Date(0);
ka.firstName = 'Mong';



interface Elements {
    [key:number]: string;
}
let ex:Elements = ['Hydrogen', 'Helium', 'Lithium'];
console.log(ex);   //['Hydrogen', 'Helium', 'Lithium']
console.log(ex[0]); //Hydrogen 
