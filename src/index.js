const http = require("http");
const getUsers = require("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${hostname}`);

  if (url.searchParams.has("hello")) {
    if (url.searchParams.get("hello") === "") {
      response.statusCode = 400;
      response.statusMessage = "Error";
      response.setHeader("Content-Type", "text/plain");
      response.write("Enter a name");
      response.end();
      return;
    } else {
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "text/plain");
      response.write(`Hello, ${url.searchParams.get("hello")}`);
      response.end();
      return;
    }
  }

  if (url.searchParams.has("users")) {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
    return;
  }

  response.statusCode = 200;
  response.statusMessage = "OK";
  response.setHeader("Content-Type", "text/plain");
  response.write("Hello World");
  response.end();

  // Написать обработчик запроса:
  // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
  // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
  // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
  // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
  // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}`);
});
