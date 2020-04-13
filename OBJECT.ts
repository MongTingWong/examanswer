//Example 1


let person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 


 console.log(person.firstname) 
 console.log(person.lastname)


 //Example 2

 var person1 = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  }   
 } 
 person1.sayHello = function() {  
    console.log("hello "+person1.firstName)
 }  
 person1.sayHello()


 //Example 3


 let person3 = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 let person4 = function(obj: { firstname:string, lastname :string }) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 person4(person)
