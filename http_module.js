const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to Homepage</h1>");
    res.end();
  }
  if (req.url === "/about") {
    res.write("<h1>This is the about page</h1>");
    res.end();
  }
  res.write(`
    <h1>Oops</h1>
    <p>Wrong Page</p>
    <a href='/'>Go Home</a>
    `);
  res.end();
});

server.listen(3000);
