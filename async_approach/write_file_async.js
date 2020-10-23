var fs = require('fs');

// fs.writeFile('sample_one.txt', "Hello Everyone!", function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data written to file successfully.");
//     }
// })

fs.appendFile('sample_one.txt', "Hello Everyone!", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Data written to file successfully.");
    }
})