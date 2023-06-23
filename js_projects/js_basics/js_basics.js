// variables
let firstName = "Chandler";
let lastName = "Smith";
let id = 1298;
let email = "chandler.smith@gmail.com";
let phone = "+1798083804";
let isMember = true;

// === Objects ===
    // create basic object
    const person = {
        name: "Jack",
        age: 21,
        isMarried: false,
    }

    const anotherPerson = {...person, name: "Trish"}//using the spread operator which lets me keep everything inside of the person object. Everything after the comma will be changed for the new object.

    // Deconstruction of  objects
    const {name, age, isMarried} = person;    // creates variables that are coresponding to the variables inside the object
    console.log("Person: " + name);
    console.log("Another person: " + anotherPerson.name);

// === Arrays ===
let names = ["Jack", "Harry", "Sarah"];

// Array functions
// .map() >> maps or goes over every single element in the array
 const personFound = names.map((name) => {
    const personFound = name === "Sarah"; //is the name equal to Sarah?
    let person = personFound == true ? `Yes, its ${name}!` : "No, no one was found!"; // if the name is equal to Sarah print condition one otherwise condition two
    return person;
  });

  console.log("Is the person found: " + personFound);

//   names.filter();
//   names.reduce();



// Arrays
    // create array to hold multiple users
    let user = {};
    let users = [];

    // adding the user to the users array
    users[0] = user;
    
    //Methods pop/push, shift/unshift
    // push >> appends element to the end (here we use the helper function addUserInfo to populate the array faster)
        users.push(addUserInfo("Sandra", "Miller", "2789", "sandra.miller@gmail.com", "+7823197804"));
        users.push(addUserInfo("Richard", "Miller", "2790", "richard.miller@gmail.com", "+7823197804"));
    // pop >> takes the element from the end and returns it
        let extractedUser = users.pop();
    // shift >> extract the first element of the array and return it
        users.shift();
    // unshift >> add an element to the beginning of the array
        users.unshift(extractedUser);

// loops
    // for loop
    let fruits = ["banana", "apple", "orange", "Plum", "Pear"];
    
    console.log(`Fruits array: ${fruits}`);

    for (let i = 0; i < fruits.length; i++) {
        console.log(`for loop: ${fruits[i]}`);
      }

    //for..of loop
    // for..of loop does not return the current number of the element but its value. Its shorter and faster to use and in most cases enough.
    for(let fruit of fruits){
        console.log(`for..of loop: ${fruit}`);
    }

    //while loop
    // Syntax:
    // while (condition) {
        // code
        // so-called "loop body"
    // }

    // Example
    let i = 0;
    while(i <= 4){
        console.log(`Iteration (while loop) ${i}: ${i}`);
        i++;
    }

    // do...while loop
    // do {
        // loop body
    // } while (condition);

    // Example
    do {
        console.log(`Iterations (do...while loop): ${i}`);
        i++;
    }while(i<=4);

    //=== Tasks ===
        //1. Is array copied?
        //What is this code going to show?
        // let fruits = ["Apples", "Pear", "Orange"];

        // push a new value into the "copy"
        // let shoppingCart = fruits;
        // shoppingCart.push("Banana");

        // what's in fruits?
        // alert( fruits.length ); // 4


        // 2. Let’s try 5 array operations.

            // 1. Create an array styles with items “Jazz” and “Blues”.
            let musicGenre = ["Jazz","Blues"];
            console.log(`1: ${musicGenre}`);
            // 2. Append “Rock-n-Roll” to the end.
            musicGenre.push("Rock-n-Roll");
            console.log(`2: ${musicGenre}`);
            // 3. Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
            musicGenre[Math.floor(musicGenre.length / 2)] = "Classics";    
            console.log(`3: ${musicGenre}`);
            // 4. Strip off the first value of the array and show it.
            console.log(`Stripped element: ${musicGenre.shift()}`);
            console.log(`4: ${musicGenre}`);
            // 5. Prepend Rap and Reggae to the array.
            musicGenre.unshift("Rap", "Reggae");
            console.log(`5: ${musicGenre}`);            

            
            // The array in the process:

            // 1. Jazz, Blues
            // 2. Jazz, Blues, Rock-n-Roll
            // 3. Jazz, Classics, Rock-n-Roll
            // 4. Classics, Rock-n-Roll
            // 5. Rap, Reggae, Classics, Rock-n-Roll

        // 3. Calling in an array context
            // What is the result? Why?
            // let arr = ["a", "b"];

            // arr.push(function() {
            // alert( this );
            // });

            // arr[2](); // ? >> a,b,function(){...}
        
        // 4. Sum input numbers
            // Write the function sumInput() that:
            // - Asks the user for values using prompt and stores the values in the array.
            // - Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
            // - Calculates and returns the sum of array items.
            
            // P.S. A zero 0 is a valid number, please don’t stop the input on zero.

            function sumInput(){
                let numbers = [];
                
                while(true){
                    let askedValue = prompt("add a number", 0);
                    
                    //test for cancel
                    if(askedValue === null || askedValue === "" || !isFinite(askedValue)) {
                        break;
                    }

                    numbers.push(+askedValue);
                }
                
                let sum = 0;
                for (let number of numbers) {
                    sum += number;
                }
                return sum;
            }

            // sumInput();


        // 5. A maximal subarray
            // The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

            // The task is: find the contiguous subarray of arr with the maximal sum of items.

            // Write the function getMaxSubSum(arr) that will return that sum.

            // For instance:

            // getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
            // getMaxSubSum([2, -1, 2, 3, -9]) == 6
            // getMaxSubSum([-1, 2, 3, -9, 11]) == 11
            // getMaxSubSum([-2, -1, 1, 2]) == 3
            // getMaxSubSum([100, -9, 2, -3, 5]) == 100
            // getMaxSubSum([1, 2, 3]) == 6 (take all)
            // If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

            // getMaxSubSum([-1, -2, -3]) = 0
            // Please try to think of a fast solution: O(n2) or even O(n) if you can.
            newArr = [1, -3, 2, 1, -1];

            function getMaxSubSum(arr){
                let maxSum = 0;
                let currentSum = 0;

                for(let num in arr){
                    currentSum += num;
                    maxSum = Math.max(maxSum, currentSum);
                    if(currentSum < 0){
                        currentSum = 0;
                    }

                    return maxSum;
                }
            }

            getMaxSubSum(newArr);
// functions
// Functions are actions and therefore should be brief and accurate in naming.
// Function starting with…
    // "get…" – return a value,
    // "calc…" – calculate something,
    // "create…" – create something,
    // "check…" – check something and return a boolean, etc.

// A function should do exactly what is suggested by its name, no more.
// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

// Function Tasks
// 1. Is "else" required?
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:
        // function checkAge(age) {
        //   if (age > 18) {
        //     return true;
        //   } else {
        //     // ...
        //     return confirm('Did parents allow you?');
        //   }
        // }

// Will the function work differently if else is removed?
        // function checkAge(age) {
        //   if (age > 18) {
        //     return true;
        //   }
        //   // ...
        //   return confirm('Did parents allow you?');
        // }
// Is there any difference in the behavior of these two variants?
// No difference!

// In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

// 2. Rewrite the function using "?" or "||"
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.
        // function checkAge(age) {
        //   if (age > 18) {
        //     return true;
        //   } else {
        //     return confirm('Did parents allow you?');
        //   }
        // }

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||

// Solution 
// function checkAge(age){
//     return age > 18 || confirm("Did parents allow you?");
// }

// function checkAge(age){
//     return age > 18 ? true : confirm("Did parents allow you?");
// }

// 3. Function min(a,b)
// Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
        // min(2, 5) == 2
        // min(3, -1) == -1
        // min(1, 1) == 1

// Solution

// function min(a,b){
//     if(a < b) {
//         return a;
//     }
    
//     return b;
// }


// console.log(min(2,5)); // 2
// console.log(min(6,5)); // 5

// 4. Functiom pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
    // pow(3, 2) = 3 * 3 = 9
    // pow(3, 3) = 3 * 3 * 3 = 27
    // pow(1, 100) = 1 * 1 * ...* 1 = 1
//  Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.

// function pow(x,n){
//     return Math.pow(x,n);
// }

// console.log(pow(3,2)); // 9
// console.log(pow(3,3)); // 27
// console.log(pow(1,100)); // 1









// https://javascript.info/function-basics
    //basic function to populate the object keys with values
    function addUserInfo(firstName, lastName, id, email, phone, isMember){
        let newUser = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        email: email,
        phone: phone,
        isMember: isMember,
        };

        return newUser;
    }
// Ternary operators
// Shorthand notations for if statements with ternary operators
// 1. && operator
// let name = age > 10 && "Jack"; //name will be Jack if age is greater than. The "&&" operator means than.
// The same example can be flipped, meaning that if the age is not greater than 10, name will be Jack
// let name = age > 10 || "Jack"; 
        // >>> if age > 10 >> true
        // >>> if age < 10 >> false

// The conditional ternary operator
// It is used as an alternative to the if...else statement
// Syntax: 
    // condition ? expression if true : expression if false
// Example:
    // const age = 26;
    // const beverage = age >= 21 ? "Beer" : "Juice";
    // console.log(beverage); // "Beer"

// The ternary operator is right-associative and therefore can be chained
// function example() {
//     return condition1 ? value1
//           : condition2 ? value2
//           : condition3 ? value3
//           : value4;
//   }

// if
// if else
// 

// Arrow functions
    // https://javascript.info/arrow-functions-basics


// classes
    // https://javascript.info/classes
    // The basic class syntax is:
    // class MyClass {
    //     // class methods
    //     constructor() { ... }
    //     method1() { ... }
    //     method2() { ... }
    //     method3() { ... }
    //     ...
    //   }

    // Then use new MyClass() to create a new object with all the listed methods.
    // The constructor() method is called automatically by new, so we can initialize the object there.

    // For example:
    // class User {

    //     constructor(name) {
    //       this.name = name;
    //     }
      
    //     sayHi() {
    //       alert(this.name);
    //     }
      
    //   }
      
    // Usage:
    //   let user = new User("John");
    //   user.sayHi();

    // Getters/Setters
    // Example
    // class User {

    //     constructor(name) {
    //       // invokes the setter
    //       this.name = name;
    //     }
      
    //     get name() {
    //       return this._name;
    //     }
      
    //     set name(value) {
    //       if (value.length < 4) {
    //         alert("Name is too short.");
    //         return;
    //       }
    //       this._name = value;
    //     }
      
    //   }
      
    //   let user = new User("John");
    //   alert(user.name); // John
      
    //   user = new User(""); // Name is too short.

    // Classes Tasks
    // 1. Rewrite to class
    // The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.
    // https://plnkr.co/edit/MmhvN3wn0sUBqjwR?p=preview&preview
    // P.S. The clock ticks in the console, open it to see.

// Modules
    // https://javascript.info/modules
// Promises, async/await
    // https://javascript.info/async