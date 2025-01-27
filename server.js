const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({
    "posts": [
      {
        "author": "Ron Jeffrey\n",
        "quote": "Code never lies, comments did",
        "id": "3"
      },
      {
        "author": "Jeff Atwood",
        "quote": "The best code is no code at all.",
        "id": "4"
      },
      {
        "author": "Casey Patton",
        "quote": "Programming is thinking, not typing",
        "id": "6"
      },
      {
        "author": "Mike",
        "quote": "If the code doesn't bother you, don't bother it",
        "id": "fEKKQy3"
      },
      {
        "author": "",
        "quote": "Computers are fast, programmers keep it slow  ",
        "id": "oUuWlwb"
      }
    ]
  });
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});