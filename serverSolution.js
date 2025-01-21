const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  req.on('error', (err) => {
    console.error('Request error:', err);
  });

  //Keep alive settings to prevent connection pooling issues
  req.setTimeout(10000, () => {
    console.log('Request timeout');
    req.destroy();
  });

  res.on('error', (err) => {
    console.error('Response error:', err);
  });

  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // 5-second delay
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Keep-alive settings for the server
server.keepAliveTimeout = 5000;
server.maxHeadersCount = 1000;