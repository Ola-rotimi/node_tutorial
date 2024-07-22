const { readFile } = require("fs");
const http = require("http")

const eventLoop = () => {
//     console.log("started a task");

// readFile("./fs_text_async.txt", 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result);
//     console.log("First task completed");
// })

// console.log("starting next task");

//using timeout
// console.log("first");
// setTimeout(()=>{
//     console.log("second")
// }, 0);
// console.log("third")

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end("Hello World");
})

server.listen(5000, ()=>{
    console.log('server listening on port 5000');
})

}

module.exports = eventLoop;