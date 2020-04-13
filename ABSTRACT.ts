abstract class Selise {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(string): Selise;
}

class  Employee extends Selise {

    employeeCode: number;
    constructor(name: string, code: number) {
        super(name);
        this.employeeCode = code;
    }

    find(name: string): Selise {
        return new Employee(name, 1);
    }
}

let emp: Selise = new Employee("Mong", 12);
emp.display(); // Mong

let emp3: Selise = emp.find('TIng');




abstract class Person {
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee1 extends Person { 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(); 
        
        this.empCode = code;
        this.name = name;
    }
}

let emp1: Person = new Employee1("James", 100);
emp1.display(); 