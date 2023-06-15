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
    // push >> appends element to the end
        users.push(addUserInfo("Sandra", "Miller", "2789", "sandra.miller@gmail.com", "+7823197804"));
        users.push(addUserInfo("Richard", "Miller", "2790", "richard.miller@gmail.com", "+7823197804"));
    // pop >> takes the element from the end and returns it
        let extractedUser = users.pop();
    // shift >> extract the first element of the array and return it
        users.shift();
    // unshift >> add an element to the beginning of the array
        users.unshift(extractedUser);




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
    

    // calling the addUserInfo function to populate the user object
    addUserInfo(firstName,lastName,id,email,phone,isMember);

console.log(users);

// classes
// loops
// Modules
// Promises, async/await