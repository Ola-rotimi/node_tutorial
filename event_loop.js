const { readFile } = require("fs");

const eventLoop = () => {
    console.log("started a task");

readFile("./fs_text_async.txt", 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
    console.log("First task completed");
})

console.log("starting next task");}

module.exports = eventLoop;