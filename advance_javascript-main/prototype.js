// const Mobile=function(model_no){
//     this.model=model_no,
//     this.prize=3000
// };
// let samsung=new Mobile('galaxy')
// let nokia=new Mobile('3310')
// let redmi=new Mobile("2020")
// // classname.prototype.key="value";
// Mobile.prototype.colour="white"
// console.log(samsung.colour)
// console.log(nokia.colour)
// console.log(redmi.colour)
// console.log(samsung)
// console.log(nokia)
// console.log(redmi)


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green"); 
  Person.nationality = "English";
  console.log(Person)



// // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// // creating objects
// const person1 = new Person();
// const person2 = new Person();
// const person3 = new Person()
// // adding property to constructor function
// Person.prototype.gender = 'male';
// // prototype value of Person
// console.log(Person.prototype);
// // inheriting the property from prototype
// console.log(person1.gender);
// console.log(person2.gender);
// console.log(person3.gender)




// // function constructor
// function Person(name, job, yearOfBirth){   
//     this.name= name;
//     this.job= job;
//     this.yearOfBirth= yearOfBirth;
// }
// // adding calculateAge() method to the Prototype property
// Person.prototype.calculateAge= function(){ 
//     console.log('The current age is: '+(2019- this.yearOfBirth));
// }
// console.log(Person.prototype);
// // creating Object Person1
// let Person1= new Person('Jenni', 'clerk', 1986); 
// console.log(Person1)
// let Person2= new Person('Madhu', 'Developer', 1997);
// console.log(Person2)
// Person1.calculateAge();
// Person2.calculateAge();