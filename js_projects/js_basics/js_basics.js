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

    // adding single user to array users
    function addUserToUsers(users, newUser){
        users[users.length] = newUser;
    }


    // calling the addUserInfo function to populate the user object
    addUserInfo(firstName,lastName,id,email,phone,isMember);

    //adding a new user to the database array users
    addUserToUsers(users, addUserInfo("Sandra", "Miller", "2789", "sandra.miller@gmail.com", "+7823197804"));
    addUserToUsers(users, addUserInfo("Richard", "Miller", "2790", "richard.miller@gmail.com", "+7823197804"));

    console.log(users);

// classes
// loops
// Modules
// Promises, async/await