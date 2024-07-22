//modules
// const sayHi = require("./util");
// const names = require("./first_module");
// const http_module = require("./http_module");
const { readFile } = require("fs");

// console.log(module);
// console.log(sayHi);

// sayHi("James");
// sayHi(names.firstName);
// sayHi(name.lastName);
// console.log(http_module);

console.log("started a task");

readFile("./fs_text_async.txt", 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
    console.log("First task completed");
})

console.log("starting next task");