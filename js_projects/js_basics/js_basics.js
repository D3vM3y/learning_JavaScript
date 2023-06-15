// variables
let firstName = "Chandler";
let lastName = "Smith";
let id = 1298;
let email = "chandler.smith@gmail.com";
let phone = "+1798083804";
let isMember = true;

// objects
    // create basic object
    let user = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        email: email,
        phone: phone,
        isMember: isMember,
    }

// Arrays
    // create array to hold multiple users
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

// functions
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


// classes

// Modules
// Promises, async/await