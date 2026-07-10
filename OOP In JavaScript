//OBJECT
const student = {
    fullName : "harry",
    marks : 80,
    printMarks : function () { //method
        console.log("marks = ", this.marks);
    },
}
student.printMarks();
console.log(student);

//prototypes prperty inherit in JS
const employee = {
    calcTax() {
        console.log("tax rate is 90");
    },
};

const karan = {
    salary : 50000,
};

console.log(karan);

karan,__proto__= employee;
karan.calcTax();

//CLASSES IN JS
class ToyotaCar {
    start() {    //methods
        console.log(start);
    }

    stop() {
        console.log(stop);
    }

    setBrand (brand) {
        this.brand = brand;
    }  
}

let fortuner = new ToyotaCar(); //objects
fortuner.setBrand("fortuner");

//CONSTRUCTOR
class ToyotaCar {

    constructor () {
        console.log("creating new object");
    }
    start() {    //methods
        console.log(start);
    }

    stop() {
        console.log(stop);
    }

    setBrand (brand) {
        this.brand = brand;
    }  
}

let fortuner = new ToyotaCar(); //objects //constructor called first
fortuner.setBrand("fortuner");

//Constructer with arguments
class ToyotaCar {

    constructor (brand , mileage ) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {    //methods
        console.log(start);
    }

    stop() {
        console.log(stop);
    }
}

let fortuner = new ToyotaCar("fortuner", 10); //objects //constructor called first
console.log(fortuner);

//INHERITANCE IN JS //extend properties from parent to child class
//use extend keyword
class Person {
  eat() {
    console.log("eat");
  }
  sleep () {
    console.log("sleep");
  }  
}

class Engineer extends Person {
    work () {
        console.log("sove problems");
    }
}

let jsobj = new Engineer();

//SUPER KEYWORD //to access parent classs functions and methods
class Person {
    constructor () {
        this.species = "homo sapiens";
    }
    eat() {
      console.log("eat");
    }
    
  }
  
  class Engineer extends Person {
    constructor(branch) {
        super(); //to invoke parent class constructor
        this.branch = branch;
    }
      work () {
          console.log("sove problems");
      }
  }
  
  let engobj = new Engineer("chemical");
  
//question solve
let Data = "secret information";

class User {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", Data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new value";
    }
}

let student1 = new User("jasim" , "abc@gmail.com");

let student2 = new User("harry" , "123@gmail.com");
let admin1 = new Admin("admin", "adminøgmail.com");


