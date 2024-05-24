const httpServer = require('http-server');
const port = process.env.PORT || 7002; // Default to port 7002 if PORT is not set

const server = httpServer.createServer({
  root: './dist',
  cors: true,
  cache: -1,
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
