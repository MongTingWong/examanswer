//Example 1
class foo {
    constructor(protected name: string){

    }

    greet(){
        console.log('HI I am' + this.name);
    }
}

class bar extends foo {
    constructor(name: string, private favfood: string){
        super(name);
    }

    talk(){
        console.log(this.name + ":" + this.favfood);
    }
}

let x = new bar('one', 'Pizza');
let y = new bar('two', 'burgars');

x.greet();
y.greet();

x.talk();
y.talk();


//Exmaple 2
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    display():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 let obj = new Circle(223); 
 obj.display()


//Example 3
 class Root { 
    st:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} 
 
 let obj1 = new Leaf(); 
 obj1.st="hello" 
 console.log(obj1.st);