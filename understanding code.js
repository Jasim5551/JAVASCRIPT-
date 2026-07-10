fullname = "jasim";

//VARIABLES

age = 18;
console.log(fullname);
isfollow = false;
console.log(isfollow);

two variables with slight diff
fullname = "jasim";
fullName = "JASIM";

console.log(fullname);
console.log(fullName);

//let keyword
let name = "jasim";
console.log(name);
let age = 18;
age = 20;
console.log(age);

const keyword
const age = 21;
console.log(age);

const PI = 3.14;
console.log(PI);
 
let a;
a = 10;
console.log(a);

Block variable
{
  let a = 5;
  console.log(a);

}

//DATATYPES

number
let age = 22;
let price = 100.9;

//string
let fullName = "JASIM";

//bolean
isFollow = true;
console.log(isFollow);

//undefined
let x;
console.log(x);

null
let x = null;
console.log(x);
//bigint

let x = Bigint("123");
console.log(x);

symbol
let y = Symbol("hello");
console.log(y);

//OBJECTS
const student = {
  fullName : "harry",
  age : 18,
  cgpa : 3.5,
  isPass : true,
};

console.log(student.age);
console.log(student);
console.log(student["age"]);

//to assign new value
const student = {
    fullName : "harry",
    age : 18,
    cgpa : 3.5,
    isPass : true,
  };
  
  student["age"] = student["age"] + 1;
  console.log(student["age"]);

//question solve 1
const product = {
  name : "Ball Pen",
  rating : 4,
  offer : 5,
  price : 270,
};

console.log(product);

2
const profile = {
  username : "@jasim",
  isfollow : false,
  followers : 500,
  following : 123,
};

console.log(profile);
console.log(typeof profile["username"]);

//OPERATORS
//ARITHNETIC +,-,/,*
//+
let a = 5;
let b = 2;
console.log("a + b = ", a + b);

//-
let a = 5;
let b = 2;
let c = a - b;
console.log(c);

//modulus
let a = 5;
let b = 2;
let c = a % b;
console.log(c);

//exponentiation power
let a = 5;
let b = 2;
console.log("a ** b = ", a ** b);

//unary operator
let a = 5;
let b = 2;
a++;
console.log(a);

let a = 5;
let b = 2;
++a;
console.log(a);

let a = 5;
let b = 2;
console.log("a-- = ", a--); //5
console.log("a = ",a); //4

//ASSIGNMENT
let a = 5;
let b = 2;
a += 4; // a = a + 4
console.log(a);

let a = 5;
let b = 2;
a -= 4; // a = a - 4
console.log(a);

let a = 5;
let b = 2;
a /= 4; // a = a / 4
console.log(a);

let a = 5;
let b = 2;
a **= 4; // a = a ** 4
console.log(a);

//COMPARISON
let a = 5;
let b = 2;
console.log("5 == 2", a == b); //false

let a = 5;
let b = 2;
console.log("5 != 2", a != b); //true

let a = 5;
let b = "5"; //string to nmbr
console.log("a === b", a === b); //false

let a = 5;
let b = "5";
console.log("a !== b", a !== b); //true

let a = 5;
let b = 3;
console.log("5 > 3", a > b);//true

let a = 5;
let b = 5;
console.log("5 <= 5", a <= b);//true

//LOGICAL
AND
let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 = a === 6; //True
console.log("cond1 && cond2 = " , cond1 && cond2);

//OR
let a = 6;
let b = 5;

let cond1 = a < b; //false
let cond2 = a === 6; //True
console.log("cond1 || cond2 = " , cond1 || cond2);

//NOT
let a = 6;
let b = 5;

console.log("! (6 < 5) = " , !(a < b)); //false

//CONDITIONAL STATEMENTS IN JS
//IF STATEMENT
let age = 25;

if (age > 18) {
   console.log("you can vote");
}

//mode example
let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
}

if(mode === "light") {
    color = "white";
}

console.log(color);
    
//IF ELSE STATEMENT
let mode = "light";
let color;

if(mode === "dark") {
color = "black";
} 
else {
    color = "white";
}

console.log(color);

//ODD OR EVEN
let num = 10;

if (num % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}

//ELSE IF
let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
}
else if(mode = "blue") {
    color = "blue";
}
else if(mode === "pink") {
    color = "pink";
}
else {
    color = "white";
}

console.log(color);

//TERNARY OPERATOR
let age = 25;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

//ALERT ONE TIME POPUP
alert("hello");

//PROMPT
thie is same as alert but prompt also takes an input
let name = prompt("hello");
console.log(name);

//question solve
let num = prompt("enter a number");

if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
}
else {
    console.log(num, "is not a multiple of 5");
}

//question 2
let score = 75;
let grade;

if ( score >= 90 && score <= 100) {
    grade = "A";
} else if ( score >= 70 && score <= 89) {
    grade = "B";
} else if ( score >= 60 && score <= 69) {
    grade ="C";
} else if ( score >= 50 && score <= 59) {
    grade = "D";
} else if ( score >= 0 && score <= 49) {
    grade = "F";
}

console.log("your grade is", grade);

//LOOPS IN JS
FOR LOOP
for(let count = 1; count<= 20; count++ ) {
    console.log("jasim");
}

//calculate sum of 1 to 5
sum = 0;
for(let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum", sum);

//infinite loop
print 1 to 5
for(let i = 1; i >= 0; i++) {
    console.log("i = " , i);
}

//WHILE LOOP
let i = 1;
while(i<=5) {
    console.log("i= ",i);
    i++;
}

//DO WHILE LOOP
let i = 1;
do {
    console.log("i=" , i);
    i++;
} while (i <= 5);

//FOR OF LOOP
let str = "harry";

for(let i of str) {
    console.log("i = " , i); //print characters of harry
}

//size of string
let str = "harry";

let size = 0;
for(let i of str) {
    console.log("i = ", i);
    size++;
}

console.log("string size = " , size);

//FOR IN LOOP used for print object keys
let student = {
   name : "hary",
   age :20,
   cgpa : 3.7,

};

for(let i in student) {
    console.log(i);
}
    
//question solve print 1 to 100
for(let num = 0; num <= 100; num++) {
    console.log("num = " , num);
}

//print even nmbrs
for(let num = 0; num <= 100; num++) {
    if (num % 2 == 0) {
        console.log("num = " , num);
    }
}

//create game for guessing number
let gameNum = 25;
let userNum = prompt("Guess the number : ");

while ( userNum != gameNum ) {
 userNum =prompt("You entered wrong number,Guess again:");
}

console.log("Congratulations , You entered correct number");

//STRINGS IN JS
let str = "jasim";
console.log(str [0]);

console.log(str.length);

//TEMPLATE LITERALS
let obj = {
    item : "pen",
    price : 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// toUpperCase
 let str = "apnaclg";
 let newStr = str.toUpperCase();
 console.log(str);
 console.log(newStr);

//lowercase
let str = "apNaclg";
let newStr = str.toLowerCase();
console.log(str);
console.log(newStr);

//str.trim remove spaces
let str = "   Apna clg JS   ";
console.log(str.trim());

//str.slice
let str = "012345";
console.log(str.slice(1,4));

//for join two stings
let str1 = "apna";
let str2 = "clg";
let result = str1.concat(str2);
console.log(result);

//for replace
let str = "hello";
console.log(str.replace("h" , "y"));

//for find index character
let str = "hello";
console.log(str.charAt(0));

//question solve for username
let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);

//ARRAYS IN JS
let marks = [56, 59, 44, 80, 90];
console.log(marks);
console.log(marks.length);

console.log(marks[2]);
console.log(marks[2] = 22); //for change values
console.log(marks);

//looping over an array
//using for loop
let marks = [56, 59, 44, 80, 90];
for(let idx = 0; idx < marks.length; idx++) {
    console.log(marks[idx]);
}

using for of loop
let marks = [56, 59, 44, 80, 90];
for(let mark of marks) {
    console.log(mark);
}

//question solve
let marks = [80, 87, 77, 60, 30, 55];
let sum = 0;

for(val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks = ${avg}`);

//question 2
let items = [250, 645, 300, 900, 50];
 for(let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
 }
console.log(items);

//ARRAYS METHODS
//Push() add to end
let foodItems = ["apples", "mango", "lichi"];
foodItems.push("chips");
console.log(foodItems);

//pop() delete from end
let foodItems = ["apples", "mango", "lichi"];
foodItems.pop();
console.log(foodItems);

//tostring()
let foodItems = ["apples", "mango", "lichi"];
console.log(foodItems.toString());

//concat() for join two arrays
let foodItems = ["apples", "mango", "lichi"];
let heroes = ["superman", "batman"];
let newHeroes = foodItems.concat(heroes);
console.log(newHeroes);

//shift() delete from start
let foodItems = ["apples", "mango", "lichi"];
let val = foodItems.shift();
console.log(val);
console.log(foodItems);

//shift() add to start
let foodItems = ["apples", "mango", "lichi"];
let val = foodItems.unshift("cherry");
console.log(val);
console.log(foodItems);

//slice()
let foodItems = ["apples", "mango", "lichi"];
console.log(foodItems.slice(1,2));

//splice()
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.splice(2, 2, 101, 102));
console.log(arr);

//question solve
let companies = ["google", "microsoft", "ibn", "netflix"];
companies.shift();
companies.splice(2, 1, "uber");
console.log(companies);

//FUNCTIONS
function myFunction() {        //function define
    console.log("hello world");
}

myFunction(); //function call

//2 numbers sum
function sum(x, y) {
    console.log(x + y);
}

sum(5 , 5);

//arrow sum
function sum(x, y) {
   return x + y;
}

const arrowSum = (x , y) => {
    console.log(x + y);
};

arrowSum(6 , 8);

//question solve
function countWowels(str) {
    let count = 0;
   for(const char of str) {
  if(char == "a" || char =="e" || char == "i" || char == "o" || char == "U") {
    count++;
  }
   }
   countWowels(abc);
   console.log(count);
   return count;
}

//for each loop in arrays
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});

//in the form of arrow 
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val);
});

//question for every number square
let nums = [2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num * num);
});

//map array method
let nums = [2, 3, 4, 5];
let newArr = nums.map((val) => {
    return val;
});

//filter
let arr = [2, 3, 4, 5];
let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);

//reduce
let arr = [2, 3, 4, 5];
const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);

//question solve
let marks = [97, 78, 99, 89];
let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(toppers);

//question 2
let n = prompt("enter a number ");

let arr = [];
for(let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res , curr) => {
    return res + curr;
});

console.log(sum);

let factorial = arr.reduce((res , curr) => {
    return res * curr;
});

console.log(factorial);

