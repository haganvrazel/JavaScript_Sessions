/**
 * Promise: helps in writing async code.
 * It also helps us avoid a callback hell.
 * First, we create promise and then we handle them.
 * Promise in JS can be either resolved or rejected.
 */

var promise = new Promise(function(resolve,reject) {
    var status = true;
    if (status) {
        resolve("Your status is active.");
    } else {
        reject("Your status in inactive.");
    }
})

promise.then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})

promise.then((data) => console.log(data)).catch((err) => console.log(err));