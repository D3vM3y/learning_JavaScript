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

