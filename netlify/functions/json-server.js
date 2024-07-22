const { createServer } = require('http');
const { parse } = require('url');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const httpServer = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  req.url = parsedUrl.path;
  server(req, res);
});

httpServer.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});