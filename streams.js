const fs = require("fs");
const http = require('http');

const streams = () => {
//   for (let i = 0; i < 1000; i++) {
//     writeFileSync("./content/big_file.txt", `Hello World ${i} \n`, {
//       flag: "a",
//     });
//   }

http.createServer((req, res) => {
    // const text = fs.readFileSync("./content/big_file.txt", 'utf8')
    // res.end(text);

    const stream = fs.createReadStream("./content/big_file.txt", 'utf8');
    stream.on('open', () => {
        stream.pipe(res);
    });
    stream.on('error', (err) => {
        res.end(err);
    })
  }).listen(5000);

//   stream.on("data", (result) => {
//     console.log(result);
//   });


};

module.exports = streams;
