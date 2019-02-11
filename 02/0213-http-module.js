const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('index page');
        res.end();
    }
    if (req.url === '/api/page') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(8000);

console.log('Listening on port 8000...');
