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
        firstName,
        lastName,
        id,
        email,
        phone,
        isMember,
    }

// Arrays
    // create array to hold multiple users
    let users = [];

    
// functions
    //basic function to populate the object keys with values
    function addUserInfo(firstName, lastName, id, email, phone, isMember){
        user.firstName = firstName;
        user.lastName = lastName;
        user.id = id;
        user.email = email;
        user.phone = phone;
        user.isMember = isMember;
    }

    // adding single user to array users
    function addUserToUsers(users, newUser){
        
    }


    // calling the addUserInfo function to populate the user object
    addUserInfo(firstName,lastName,id,email,phone,isMember);

// classes
// loops
// Modules
// Promises, async/await