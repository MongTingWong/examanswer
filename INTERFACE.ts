interface person1{
    firstName: string,
    lastName: string,
    status: () => string
}

var people: person1 = {
    firstName: "Mong",
    lastName: "Ting",
    status: ():string => {
        return 'NO_ONE'
    }
}

console.log(people.firstName);
console.log(people.lastName);
console.log(people.status());


interface person2 {
    name: string;
    status(): void;
  }
  
  class person7 implements person2{
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    status(): void {
      console.log(this.name + "is nobody");
    }
  }
  
  let person8 = new person7("MONG");
  
  person8.status();