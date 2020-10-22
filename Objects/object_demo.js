// // Empty Object Literal
// var person = {};

// console.log(person);


// // Object Literal with properties
// var person = {
//     firstName: 'Hagan',
//     lastName: 'Smith'
// }

// console.log(person);


// // Object Literal with properties and methods
// var person = {
//     firstName: 'Hagan',
//     lastName: 'Smith',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// console.log(person);

var person = {
    firstName: 'Hagan',
    lastName: 'Smith',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["age"])
console.log(person.getFullName());

// var emp1 = {
//     name: "King Hagan", 
//     age: 23,
//     city: "Danbury"
// }

// var emp2 = {
//     name: "King Clam", 
//     age: 24,
//     city: "New Orleans"
// }