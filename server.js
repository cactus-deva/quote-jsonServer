const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // ชื่อไฟล์ฐานข้อมูล JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});