const http = require('http');

const httpEvent = () => {
    const server = http.createServer()

    server.on("request", (req, res) => {
        res.end('Welcome')
    })

    server.listen(5000)
};

module.exports = httpEvent