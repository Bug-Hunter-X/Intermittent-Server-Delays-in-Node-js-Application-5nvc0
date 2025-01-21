const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // 5-second delay
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});