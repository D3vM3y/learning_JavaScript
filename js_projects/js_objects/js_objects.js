// this script holds examples and challenges on JavaScript Objects

// simple object created with figure brackets
let newObj = {
    // the properties in the object are listed with "key:value" pairs
    // key is the property name and value can be anything
    name: "John",
    age: 30,
    test: false,
}

// Objects can be created in two ways
// let user = {};
// let user = new Object {};


// Property values are accessible using the dot notation:
console.log(`Hi, your name is ${newObj.name} and you are ${newObj.age} years old.`)

// It is also possible to delete a key value pair
delete newObj.test;

//The "in" operator as an easy and simple test to figure out if a property exists in an object.
console.log("challenge" in newObj); //false
console.log("name" in newObj); //true


// The for..in loop to walk over all keys of an object
console.log("Testing the for..in loop on the newObj.");

for (key in newObj){
    console.log(`${key}: ${newObj[key]}`);
}


// ==Summary==
// Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:
// >> Property keys must be strings or symbols (usually strings).
// >> Values can be of any type.

// To access a property, we can use:
// >> The dot notation: obj.property.
// >> Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].

// Additional operators:
// >> To delete a property: delete obj.prop.
// >> To check if a property with the given key exists: "key" in obj.
// >> To iterate over an object: for (let key in obj) loop.

// What we’ve studied in this chapter is called a “plain object”, or just Object.

// There are many other kinds of objects in JavaScript:
// >> Array to store ordered data collections,
// >> Date to store the information about the date and time,
// >> Error to store the information about an error.
// >> …And so on.

// They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

// Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.

// ====== Tasks =====
// == Hello Object ==
// Write the code, one line for each action:
// 1. Create an empty object user.
let user = {};
// 2. Add the property name with the value John.
user.name = "John";
// 3. Add the property surname with the value Smith.
user.surname = "Smith";
// 4. Change the value of the name to Pete.
user.name = "Pete"
// 5. Remove the property name from the object.
delete user.name;

// == Check for emptiness ==
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj){
    for(key in obj){
        return false;
    }
    return true;
}

// == Sum object properties ==
// We have an object storing salaries of our team:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

function sumSalaries(salaries){
    let sum = 0;

    for(key in salaries) {
     sum+=salaries[key];
    }
    return sum;
}

// == Multiply numeric property values by 2 ==
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.


function multiplyNumeric(obj) {
    for (let key in obj) {
        if(obj[key] == typeof('number')){
            obj[key] *= 2;
        }
    }
}





