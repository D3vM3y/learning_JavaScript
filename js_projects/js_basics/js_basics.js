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