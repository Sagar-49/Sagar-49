// Q:-1 Write a function for swapping two numbers.
/*
let a = 10;
let b = 20;
let c = a;
    a = b;
    b = c;
    console.log('a', a);
    console.log('b', b);
*/

// Q:-2 Write a program to print prime numbers from 1-100.
/*
showPrimes(100);
function showPrimes (limit) {
    for (let i = 2; i <= limit; i++) {           
        let isPrime = true;
        for (let factor = 2; factor < i; factor++) { 
            if (i % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) 
        console.log(i);
    }  
}
*/
// Q:-3 Write a program that prints each number from 1 to 100 on a new line.
// - For each multiple of 3, print "Fizz" instead of the number.
// - For each multiple of 5, print "Buzz" instead of the number.
// - For numbers which are multiples of both 3 and 5, print "FizzBuzz"
//   instead of the number.
/*
function number(i) {
    if ((i % 3 === 0) && (i % 5 === 0))    
       return 'FizzBuzz';

    if (i % 3 === 0)                   
        return'Fizz'; 
     
    if (i % 5 === 0)
       return 'Buzz';
    }
    console.log(number(20));
    */

// Q:-4 Write a program to print a star-triangle pattern.
/*
showStars(5);
  function showStars(rows){
      for (let row = 1; row <= rows; row++) {       
          let pattern = '';                          
          for (let i = 0; i < row; i++)              
           pattern += '* ';
           console.log(pattern);
      }
  }
*/


// Q:-5 Write a program to print Fibonacci Sequence.

/*
let number = 16;

let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= number; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
} 
*/

// Q:-6 Write a function to find the maximum and minimum number from an array.
/*
let array = [10, 8, 2, 6, 1, 4, 9];

console.log(Math.max(...array));  
console.log(Math.min(...array));
*/


// Q:-7 Use map() to multiply elements of arr = [1,2,3,4] with 2 to get this newArr = [2,4,6,8].

/*
let inputArray = [1, 2, 3, 4] ;

let outputArray = inputArray.map(function(value) {
          return  value * 2; 
}); 

console.log(outputArray);
*/

// Q:-8 Write two functions to add and remove elements from an array.

/*
let number = [1, 2, 3, 4, 6, 7, 8];
    
let total = number.push(9, 5);    
let removed = number.splice(6, 1);
console.log(number);
*/

// Q:-9 Write a program to print elements of an array.
/*
const array = [1, 2, 3, 4];

let value = array;
array.forEach((value) => console.log(value)); 
*/

// Q:-10 Write a program to find the total sum of elements in an array.

/*
let array = [1, 2, 3, 4]           

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);    
console.log(sum); 
*/

// Q:-11 Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
/*
let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join());
console.log(myColor.toString());
console.log(myColor.join(' + '));
*/

// Q:-12 Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 , 3984723, 200, 400, 37864];
// Sample Output : [ -4,-3,1,2,3,5,6,7,8, 200, 400, 37864, 3984723 ]

/*
let arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1, 3984723, 200, 400, 37864];

const array = arr1.sort(function(a, b) {
    return a - b;
});   

console.log(array);  
*/


/*
Q:-13 Write a JavaScript function to find all the details of a particular book by passing
      its libraryID in the function parameter for the following array of objects.
      Sample object :
  var library = [{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
                 { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
                 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger
                 Games', libraryID: 3245}];
*/
/*
let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}   
];

const book = library.find(function(book) {  
    return book.libraryID === 1254;
});
 
console.log(book);
*/


// Q:-14 Write a JavaScript function to retrieve falsy and truthy values from all elements in an array.
    //   Sample array : [NaN, 0, 15, false, -22,”'',undefined, 47, null]
    //   Expected truthy result : [15, -22, 47]
    //   Expected falsy result : [NaN, 0, false, “”, undefined, null]

/*
let array = [NaN, 0, 15, false, -22,'', undefined, 47, null];

let filterTruthy = array.filter(Boolean); 

console.log(filterTruthy); 
*/


// Q:-15  Write a JavaScript function to merge two arrays and remove all duplicatedelements.
    // Test data:
    // let array1 = [1, 2, 3];
    // let array2 = [2, 30, 1];
    // Expected result:
    // console.log(mergeArray(array1, array2)); [3, 2, 30, 1]
/*
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let array3 = array1.concat( array2);

let mergeValue = [...new Set(array3)];

console.log(mergeValue);
*/

/*
function merge_array(array1, array2) {
    let result_array = [];
    let arr = array1.concat(array2);
    let len = arr.length;
    let assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


console.log(merge_array(array1, array2));

*/











