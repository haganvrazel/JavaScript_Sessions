function sayHello(name) {
    console.log("Hello " + name)
    console.log(`Hello ${name}`)
}

function getFullName(firstname, lastname) { 
    console.log(`${firstname} ${lastname}`)
}

function getFullNameAgain() {
    var fName = document.getElementById('firstName').value
    var lName = document.getElementById('lastName').value
    alert(`${fName} ${lName}`)
}

// sayHello("King");
// sayHello("Hagan");
// getFullName('Hagan', 'Vrazel')