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

    
    
// functions
    //populate the object keys with values
    function addUserInfo(firstName, lastName, id, email, phone, isMember){
        user.firstName = this.firstName;
        user.lastName = this.lastName;
        user.id = this.id;
        user.email = this.email;
        user.phone = this.phone;
        user.isMember = this.isMember;
    }
// classes
// loops
// Modules
// Promises, async/await