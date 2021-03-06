 //Comment 
 //console.log('Hello World');
//  let name = 'Sagar';
//  console.log(name);
 // cannot be a reserved keyword =======
 // should be meaningful ========
 // cannot start with a number (1name) ======
 // cannot contain a space or hyphen(-) ======== 
 // Are case-sensitive ========
/*
 let firstName = 'Abhishek';
 let lastName = 'Sagar';
 console.log(firstName, lastName);
*/
// Primitive type == string, number, boolean, undefined, null ==================
/*
let name = 'Sagar' // String Literal
console.log(typeof name);
let age = 30; // Number Literal
console.log(typeof age);
let isApproved = true; // Boolean Literal
console.log(typeof isApproved);
let firstName = undefined;
console.log(typeof firstName);
let selectColor = null; 
console.log(typeof selectColor);
*/

// Reference Type == Object, Array, Function =============================
// Object =================
/*
let person = {
    name: 'Sagar',
    age: 30
};

// Dot Notation ==========
person.name = 'Mary';

// Bracket Notation =========
person['name'] = 'Abhishek';

console.log(person.name);
*/
// Array  =====================
/*
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = '2';
// console.log(selectedColors);
console.log(selectedColors.length);
*/

// function =============
// performing a task ============
/*
function greet(name, lastname) {
    console.log('hello ' + name + ' ' + lastname);
}
greet('john', 'sagar');
greet('Mary');

// calculating a value ==================
function square(number){
    return number * number;
}
console.log(square(2));
*/

// ==== Operators == Operators variables and const. create expression and with this expression informating logic and algorithms == types Arithmetic, Assingment, Comparison. Logical, Bitwise ========

// Airthmetic ======================
/*
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
//Increment (++)
console.log(++x);
console.log(x);
//Decrement (--)
console.log(--x);
*/

// Assignment Operators =================
/*
let x =10;
//console.log(x = x +5);  //or
console.log(x += 5);

//Console.log(x = x * 3); // or
console.log(x *= 3);
*/

// Comparison Operators =================
/*
let x = 1;
// Relational ========
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality ========
console.log(x === 1);
console.log(x !== 1);
*/

//Equality Operators ===================

// Strict Equality(Same type + value) =======
/*
console.log(1 === 1);
console.log('1' === 1);

// Loose Equality ======
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
console.log(false == 0);
*/

// Ternary Operator
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.
/*
let points = 90;  // 110
let type = points > 100 ? 'gold' : 'silver';
console.log(type);
*/

// Logical Operators ===================
// Logical AND (&&)===========
// Returns TRUE if both operands are true
/*
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
*/

 /*
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
*/

//Logical OR (||)===========
// Returns TRUE if one of the operands are true

/*
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome ||goodCreditScore;
console.log(eligibleForLoan);
*/

// Logical NOT (!)===========
/*
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome ||goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
*/

// Logical Operators with Non-booleans =====================

// Falsy (false)
// undefined
// null
// 0 
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy
/*
let userColor = undefined;   // or red
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
*/

//Bitwise Operators
// Read, Write, Execute
// 00000100
// 00000010
// 00000001
/*
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission =0;
myPermission = myPermission | writePermission;
let message = (myPermission & readPermission) ? 'yes': 'No';

console.log(message);
*/

//Operators Precendence ========================
/*
let x = (2 + 3) * 4;

console.log(x);
*/

// Exercise ================================
/*
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);
*/

// If- else ==================================
// Hour 
// If hour is between 6am and 12pm : Good Morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

/*
let hour = 11;
if(hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
console.log('Good Afternoon');
}
else {
console.log('Good Evening');
}
*/

// Switch Case ==================================

/*let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknown User');
}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log ('Moderator user');
else console.log('Unknown User');
*/

// Loops == for, while, Do..While, For..in, For..of ===============================
// for ======
/*
for(let i = 0; i <= 5; i++) {
    console.log('Hello world', i);
}
*/
/*
for(let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// or

for(let i = 5; i >= 1; i--) {
     if (i % 2 !== 0) console.log(i);
}
*/

// while ==============

// let i = 0;
// while (i <= 5){
//     if(i % 2 !==0) console.log(i);
//     i++;
// }

// do-while ================
/*
let i = 7;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 10);
*/

// Infinite loop =====================
//leave infinite loop otherwise it will crash your browser
/*
let i = 0;
while (i < 5) {
    console.log(i);
    //i++;
}

while (true) {
}

let x = 0;
dp{
    //x++;
}while (x < 5);

for (let i = 0; i < 10)
*/

// For in ========================
/*
const person = {
    name: 'Sagar',
    age: 30
};

for (let key in person)
//  console.log(key);
 console.log(key, person[key]);

// Dot Notation
// person.name

// Bracket Notation
// person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
console.log(index, colors[index]);
*/

// For..of ========
/*
const colors = ['red', 'green', 'blue'];

for (let color of colors)
 console.log(color);
*/

// Break and continue ==========================
/*
let i = 0;
while (i <= 10) {
    //if (i === 5) break;
  if (i % 2 === 0){
      i++;
      continue;
  }
    console.log(i);
    i++;
}
*/

// Exercise ==============================
// Write a function that takes two numbers and returns the maximum of the two.
/*
let number = max(5, 9);
console.log(number);

// function max (a, b) {
//     if (a > b) return a;
//     // else return b;
//     return b; 
// }

function max (a, b) {
 return (a > b) ? a : b; 
}
*/

// Exercise ================================
/*
console.log(isLandscape(1000, 900));

function isLandscape(width, height) {
    return (width > height)       // is this function is correct return true otherwise false
}
*/

// fizzBuzz ==================================
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a number' 
/*
const output = fizzBuzz(20);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
    return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if(input % 3 === 0)
     return 'Fizz';

    if (input % 5 === 0)
      return 'Buzz'; 
}
*/

// Exrcise ===========================
// Speed Limit = 70
// 5 -> 1 Point
// Math.floor(1.3) this helps to give return value in round figure.
// 12 points -> License suspended

// checkSpeed(70);

// function checkSpeed(speed){
//     const speedLimit = 71;
//     const kmPerPoint = 5;
/*
    if (speed <= speedLimit + kmPerPoint)
        console.log('ok');
    else {
        let points = Math.floor((speed - speedLimit)/kmPerPoint);
    if (points >= 12)
       console.log('License suspended');
    else
    console.log('Points', points);
    }
}
*/

 // or remove else and use return

 /*
     if (speed <= speedLimit + kmPerPoint){
       console.log('ok');
       return;
 }
     const points = Math.floor((speed - speedLimit)/kmPerPoint);
     if (points >= 12)
       console.log('License suspended');
     else
       console.log('Points', points);
}
*/

// Exercise ======================================

/*
showNumbers(10);

function showNumbers(limits) {

    for (let i = 1; i <= limits; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');
    }
}

*/

// or

/*
showNumbers(10);

function showNumbers(limits) {
           
    for (let i = 0; i <= limits; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
*/

// Exercise =====================================

// count truthy and falsy value 
// falsy value == undefined, null, '', false, 0, NaN
/*
const array = [0, null, undefined, '', 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if (value)
    count++;
    return count;
}
*/
// Exercise ======================================
/*
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj) {
       if (typeof obj[key] === 'string')
       console.log(key, obj[key]);
    }
}
*/

// Exercise ======================================

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
/*
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
   if(i % 3 === 0 || i % 5 === 0)
     sum += i;

    return sum;
}

console.log(sum(10));
*/

// Exercise ======================================
// find Average = 70
// 1-59: F
// 60-69: D
// 80-89: C
// 90-100: A

/*
const array = [80, 50, 100];

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let mark of array)
      sum += mark;
      return average = sum/array.length;

}
console.log(calculateGrade(array))
*/
// Exercise ======================================
// show pattern of stars
/*
showStars(10);

function showStars(rows) {
    for (let row = 1; row <=rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
        pattern += '*';
        console.log(pattern);
    }
}
*/

// Exercise ======================================
// Prime (whose factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 5, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13
/*

showPrimes(20);

function showPrimes(limit) {
    for (let number = 0; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
        
        isPrime = false;
        break;
        }
      }
    if (isPrime) console.log(number);
  }
}
*/

/*
showPrimes(20);

function showPrimes(limit) {
    for (let number = 0; number <= limit; number++)
      if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
        return false;

    return true;
}
*/

// Objects ===========================================
// object - oriented Programming (OOP)
/*
 let radius = 1;
 let x = 1;
 let y = 1;

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
circle.draw();  // Method
*/

// Factory Function

/*
function createCircle(radius) {
    return {
        radius,
        draw(){
          console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);
*/

// Constructor Function    // Camel Notation: oneTwoThreeFour
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
 const circle = new Circle(1);
 const x = {};
*/

// Dynamic Nature of Objects
/*
const circle = {
    radius: 5
};
// circle = {}   //  here we canot assign a new object for constant variacble...
circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);
*/

// Constructor Property

 // Factory Function
/*

function createCircle(radius) {
    return {
        radius,
        draw: function() {
          console.log('draw');
        }
    };
}
const circle = createCircle(1);



// Constructor Function   

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
 const another = new Circle(1);
// new string(); // '', "", ''
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...
*/

// functions are objects ===================================
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
 const another = new Circle(1);
*/
// Value vs Reference Type ================================
 
// Value Types == Number, String, Boolean, Symbol undefined, null
// Reference Types == Object, Function, Array

// at here it not increment due to number++ is independent from number = 10 so its coppied this no.
/*
let number = 10;

function increase(number) {
    number++;
}
 increase(number);
 console.log(number);

// So,

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);
*/
// primitivea are copied by their value
// Objects are copied by their reference

// Enumerating Properties of an Object ========================
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');

    }
};

for (let key in circle)
 console.log(key, circle[key]);

for (let key of Object.keys(circle))
 console.log(key);

for (let entry of Object.entries(circle))
 console.log(entry);

if ('radius' in circle) console.log ('yes');
*/

// Cloning an Object

// function object() {}
//     //  const x = { value: 1 };
//     //  const y = new object();
     
    // const circle = {
    //     radius: 1,
    //     draw() {
    //        console.log('draw');
    //     }
    // };
     
    // const another = {};
    // for(let key in circle)
    //   another[key] = circle[key];

    //   const another = Object.assign({color: 'yellow'}, circle);
    //   console.log(another);


// or
    //   const another = Object.assign({}, circle);

    //   console.log(another);

// // or

    // const another = {...circle};

    //  console.log(another);

// Garbage Collection ====================================

// let circle = {};
// console.log(circle);


// Math =================================================
// Math javascript | MDN

// string Primitive ====================================

// const message = 'h1';

// String object

// const another = new String('h1');

// Escape notation===== check out MDN

// Object {}
// Boolean true, false
// String '', ""
// Template ``

// const another = `This is my first message`;

// Template literals
/*
const name = 'John';
// const message = 'Hi ' + name + ',\n';

const another = 
`Hi ${name} ${2 + 3},

Thank you for joining my mailing list.

Regards, 
Mosh`;
*/

//  Date =========================================
/*
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);
*/

//  Exercise =====================================

// street
// city
// zipcode
// showAddress(address)
/*
let address = {
    street: 'a',
    city: 'b',
    zipcode: 'c'
};

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);
*/
//  Exercise =====================================
/*
let address = createAddress('a', 'b', 'c'); // factory function
let address1 = new Address('a', 'b', 'c'); // // Constructor Function
console.log(address);
console.log(address1);
// factory function
function createAddress(street, city, zipcode) {
    return{
        street,
        city,
        zipcode
    };
}

// Constructor Function

function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
*/
//  Exercise =====================================
/*
let address1 = new Address ('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address2
console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))
console.log(areSame(address2, address3))

// Constructor Function

function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2) { 
    return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode;
}

function areSame(address1, address2) {
    return address1 === address2;
}
*/

// Exercise ===========================================

// title
// body
// author
// views
// comments
//    (author, body)
// isLive
/*
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],
    isLive: true
};

console.log(post);
*/

// Exercise ===========================================

/*
let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.views = 0;
    this.comments = [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ];
    this.isLive = false;
}
*/
/*
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
    { averagePerPerson: 5 }
]
*/


// Arrays ==============================================
// Adding new elements
// Finding elements
// Removing elements
// Spliting arrays
// Combining arrays

// Adding elements ===================================

// const numbers = [3, 4];

// // End
// numbers.push(5, 6);

// // Begining
// numbers.unshift(1, 2);

// // Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);

// Finding Elements (Primitives)
/*
const numbers = [1, 2, 3, 4];

console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(4));

console.log(numbers.indexOf(5) !== -1); // no need to use this one to find object
console.log(numbers.includes(1)); //  The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

// Finding Elements (Objects)
/*
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];
*/
// console.log(courses.includes ({ id: 1, name: 'a'})); // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. so it will not work here.
/*
const course = courses.find(function(course) {         //The find() method returns the value of the first element 
    return course.name === 'b';                        // in the provided array that satisfies the provided 
});                                                    // testing function. If no values satisfy the testing    
console.log(course);                                   // function, undefined is returned.
*/

// Arrow function ==
/*
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(course => course.name === 'a');
console.log(course);
*/

// Removing Elements  =================================
/*
const numbers = [1, 2, 3, 4];

// remove element from last

const last = numbers.pop()
console.log(numbers);
console.log(last);

// remove element from beginning ======

const last = numbers.shift()
console.log(numbers);

// numbers remove from middle anywhere =======

numbers.splice(2,2);
console.log(numbers);
*/

// Emptying an array ===================================

// let numbers = [1, 2, 3, 4];
// let another = numbers;
// solution 1

// numbers =[];              // it will display empty array but if we give another references for array then it will show array.
// console.log(numbers);
// console.log(another);

// solution 2

// numbers.length = 0;

// console.log(numbers);
// console.log(another);

// solution 3

// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(another);

// solution 4

// while (numbers.length > 0)
//   numbers.pop();

// console.log(numbers);
// console.log(another);


// Combining an arrays ================================
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

// const slice = combined.slice(2, 4);   // or
const slice = combined.slice(2); 

console.log(combined);
console.log(slice);
*/

// The Spread Operator ===============================
/*
const first = [1, 2, 3];
const second = [4, 5, 6];
// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

const copy = [...combined];
*/

// Iterating an array  ================================
/*
const numbers = [1, 2, 3];

for (let number of numbers)
 console.log(number);

 numbers.forEach(function(number) {
     console.log(number); 
 });                                  
  // or 

numbers.forEach(number => console.log(number));

numbers.forEach((number, index) => console.log(index, number));
*/

// joining arrays ===============================
/*
const numbers = [1, 2, 3];
const joined = numbers.join(',');

console.log(joined);

const message = ' This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);
*/

// Sorting Arrays ====================================
// for elements
/*
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);
*/
/*
const courses = [
    {id: 1, name: 'Node.js' },
    {id: 2, name: 'Javascript' },
];

courses.sort(function(a, b){
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);        // ascii table
*/

// Filtering array ====================================
/*
const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter(function(value) {
//     return value >= 0;
// });

// or 
const filtered = numbers.filter(value => value >= 0);
console.log(filtered);
*/

// Mapping an array ==================================

// const numbers = [1, -1, 2, 3];


// const filtered = numbers.filter(value => value >= 0);

// const items = filtered.map(n => '<li>' + n + '<li>')

// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

// const items = filtered.map(n => {
//     const obj = { value: n };
//     return obj;
// });

// or 
// const items = filtered.map(n => {
//     return { value: n };
// });

// or 
/*
const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value);
console.log(items);
*/

// Reducing an array

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//  sum += n;
//  a = 0, c = 1 => a = 1
//  a = 1, c = -1 = > a = 0
//  a = 0, c = 2 = > a = 2
//  a = 2, c = 3 = > a = 5

//  a = 1, c = -1 = > a = 0
//  a = 0, c = 2 = > a = 2
//  a = 2, c = 3 = > a = 5

//  numbers.reduce((accumulator, currentValue) => {
//      return accumulator + currentValue;
//  }, 0);

 // or 
 /*
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

 console.log(sum);
*/

// Exercise ==========================================
/*
const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for(let i = min; i <= max; i++)
    output.push(i);
    return output;
}
*/

// Exercise =========================================
/*
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
    for (let element of array)
    if (element === searchElement)
    return true;
    return false;
}
*/

// Exercise =========================================
/*
const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
    if (!excluded.includes (element))
       output.push(element);
    return output;
}
*/
// Exercise =========================================
/*
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -2);  // here last change 1, 0r 2 or -1

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1) [0];
    output.splice(position, 0, element);
    return output;
}
*/
// Exercise =========================================
/*
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //   if (element === searchElement)
    //     count++;
    // return count;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}

*/

// Exercise =========================================
/*
const numbers = [1, 2, 3, 4];

const max = getMax ([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];

    // for (let i = 1; i < array.length; i++)
    // if (array[i] > max)
    //   max = array[i];

    // return max;

    // array.reduce((accumulator, current) => {
    // if (current > accumulator) return current;
    // return accumulator;

    // return (current > accumulator) ? current : accumulator;
    });
}
*/

//   return array.reduce((a, b) => (a > b) ? a : b);
// }

// Exercise =========================================
// all the movies in 2018 with rating > 4
// sort them by their rating
//  decending order
// pick their title
/*
const movies = [
    {title: 'a', year : 2018, rating: 4.5},
    {title: 'b', year : 2018, rating: 4.7},
    {title: 'c', year : 2018, rating: 3},
    {title: 'd', year : 2017, rating: 4.5},
];

const titles = movies
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(titles);
*/

// Function Declaration vs Expressions =================================

// function declaration
/*
walk();                   // it will display in this
function walk() {
    console.log('walk');
}

// Named function expression
// let run = function walk(){
//     console.log('run');
// };

// Anonymous function expression
let run = function() {
    console.log('run');
};
let move = run;
run();
move();
*/

// Arguments =======================================
/*
function sum (a, b) {
    console.log(arguments);
    return a + b;  // 1 + undefined = NaN
}

console.log(sum(1, 2, 3, 4, 5)); // 
*/
/*
function sum() {
    let total = 0;
    for (let value of arguments)
      total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));
*/

// Default parameters =================================
/*
function interest(principle, rate, years) {
    return principle * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
*/
/*
function interest(principle, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principle * rate / 100 * years;
}

console.log(interest(10000));
*/
/*
function interest(principle, rate = 3.5, years = 5) {
    return principle * rate / 100 * years;
}

console.log(interest(10000));
*/
/*
function interest(principle, rate = 3.5, years) {
    return principle * rate / 100 * years;
}

console.log(interest(10000, undefined, 5));
*/

// Getters and Setters =================================
/*
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fulName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fulName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


person.fulName = 'John Smmith';
// getters => access properties
// setters => change (mutate) them

console.log(person);
*/

// Try and catch =====================================

/*
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fulName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fulName(value) {
        if (typeof value !== 'string') return;
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fulName = null;

console.log(person);
*/
/*
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fulName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fulName(value) {
        if (typeof value !== 'string') 
        throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
         throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fulName = '';     // remove null and get undefined
}
catch (e){
    alert(e);
}

console.log(person);
*/

// Local Vs Global Scope ==============================
/*
const color = 'red';  // global variable

function start() {
    const message = 'hi';
    const color = 'blue';   // local variable is first priority in function rather than global variable.
    console.log(color);
}

function stop() {
    const message = 'bye';
}

start();
*/

// let Vs Var =================================
/*
function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
            // let color = 'red';
        }
    }
    console.log(color);
}

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

start();
*/


// The 'this' Keyword ================================ 
// The object that is executing the current function 

// method -> obj ===========
/*
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

video.stop();
*/

// function -> global (window, global) =========================
/*
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('a');
*/
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
*/

// Exercise ==========================================

// sum([1, 2, 3, 4]) => 10
// Array.isArray()
/*
console.log(sum([1, 2, 3, 4]));

function sum (...items) {
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
    return items.reduce((a, b) => a + b);
}
*/

// Exercise ==========================================

// circle.radius = 2;
// console.log(circle.area);
/*
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);
*/

// Exercise ==========================================
/*
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {                        // e stands for error
    console.log(e.message);
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Invalid array.');

   return array.reduce((accumulator, current) => {
       const occurence = (current === searchElement) ? 1 : 0;
       return accumulator + occurence;
   }, 0);
}
*/






















