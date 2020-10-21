// function sayHello(name) {
//     console.log("Hello " + name)
//     console.log(`Hello ${name}`)
// }

// function getFullName(firstname, lastname) { 
//     console.log(`${firstname} ${lastname}`)
// }

// function getFullNameAgain() {
//     var fName = document.getElementById('firstName').value
//     var lName = document.getElementById('lastName').value
//     alert(`${fName} ${lName}`)
// }

// sayHello("King");
// sayHello("Hagan");
// getFullName('Hagan', 'Vrazel')

// Default parameters
// function getFullName(firstName, lastName = 'Smith') {
//     console.log(`${firstName} ${lastName}`);
// }

// getFullName('King');
// getFullName('King', 'Hagan');


// Rest parameters
function add(...numbers) {
    var total = 0;
    for (var a of numbers) {
        total = total + a;
    }
    console.log(total);
}

add(10,20,30);
add(10,20,30,10,10);

console.log("--------------------------")

// Spread Parameters

var odd = [1,3,5,7];
var even = [2,4,6,8];
var combined = [...odd, ...even]
console.log(combined)