/**
 * JS provides error-handling using try-catch, and finally block
 * try is the block in which we write the code in which chances of getting errors are high.
 * catch the block to write code to do something when an error occurs
 * finally is the block that always will be executed whether an error occurs or not.
 */


// try {
//     addition(100, 200)
// } catch (ex) {
//     console.log('There is an error')
// } finally {
//     console.log('Finally block always gets executed')
// }


// function addition(num1, num2) {
//     console.log('Result: ' + (num1 + num2))
// }

var age = 8;
try {
    if(age >= 18) {
        console.log('You are valid to vote.')
    } else {
        throw {
            code: 1001,
            message: "You are not valid to vote."
        }
    }
} catch (ex) {
    console.log('There is an error')
    console.log(ex.code + ' : ' + ex.message);
} finally {
    console.log('Finally block always gets executed')
}

