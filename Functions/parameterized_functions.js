function sayHello(name) {
    console.log("Hello " + name)
    console.log(`Hello ${name}`)
}

function getFullName(firstname, lastname) { 
    console.log(`${firstname} ${lastname}`)
}

sayHello("King");
sayHello("Hagan");
getFullName('Hagan', 'Vrazel')