# Задача

**Создать сервер на Node.js с использование модулей Http и Fs.**

## Решение
Создан http сервер, который будет запускаться по адресу `127.0.0.1:3003`.

Установлен пакет [nodemon](https://www.npmjs.com/package/nodemon), настроен его запуск.

Написан обработчик входящего запроса:

- Ответом на запрос `?hello=<name>` возвращается **строка** `Hello, <name>.`, код ответа 200.
- Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** `Enter a name`, код ответа 400.
- Ответом на запрос `?users` возвращается **JSON** с содержимым файла `data/users.json`, код ответа 200.
- Если никакие параметры не переданы, то ответ **строка** `Hello, World!`, код ответа 200.
- Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500.

## Результат

- В файле package.json в секции scripts есть `dev` который запускает nodemon и `start` который запускает сервер в
  обычном режиме.
- Чтение файла с пользователями происходит в отдельном модуле, который подключается в главный файл.
- Для указания пути при чтении файла используется модуль `path`.
- Порт, на котором происходит запуск сервера, передается через переменную окружения (по умолчанию 3000).
- После запуска сервера в консоль выводится сообщение о том по какому адресу и на каком порту запущен сервер.
- В зависимости от того какой ответ отдается - меняется 'Content-Type'.
