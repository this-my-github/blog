# Приложение Блог
## Можно посмотреть по ссылке: [Блог разработчика](http://147.45.154.119:3001)
## Страницы:
### -Главная
### -Статья;
### -Новая статья;
### -Авторизация;
### -Регистрация;
### -Пользователи;

## Всего у пользователя может быть 4 роли: Администратор, Модератор, Читатель, Гость.

## Используемые технологии:

### Create React App, Styled Components, React Hook Form и Yup, React Router, Redux, Redux Thunk, React Redux, Node, Express, MongoDb, Mongoose, JWT, Bcrypt

## Шаг #1 - Скачайте проект
## Шаг #2 - Запустите сервер

### Перейдите в директорию backend `cd backend`
### Установите зависимости  `npm i`
### Создайте файл .env в котором должны быть два поля
#### `DB_CONNECTION_STRING = "mongodb+srv://<username>:<password>@cluster0.imi3n.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"` //Подключение к вашей базе
#### `JWT_SECRET = "yoursecret"`
### Запустите приложение `npm run dev`

## Шаг #3 - Запуск фронтенда

### Перейдите в директорию frontend `cd frontend`
### Установите зависимости  `npm i`
### Запустите приложение `npm start`
### Запускает приложение в режиме разработки.
### Открыть [http://localhost:3000](http://localhost:3000) чтобы посмотреть в вашем браузере.

## Можно посмотреть только frontend часть с json-server https://github.com/this-my-github/blog-frontend
