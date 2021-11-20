/*********************************************************************/
/* Чтобы запустить сервер набери в терминале node express/express.js */
/*********************************************************************/

const express = require('express');  //подключились к библиотеке экспресс
const app = express(); //создаем обьект подключения 
const jsonParser = express.json(); // подклячаем Парсер(программа считывающая переданные данные)
const cors = require('cors') // подключение библиотеки cors для преодаление защиты от кросс браузерных запросов
const fs = require("fs"); //для чтения и записи в этот файл мы будем использовать встроенный модуль fs
//const mongoose = require('mongoose') //подключаю библиотеку mongoose
const PORT = 5000;
//const filePath = "task.json";

app.use(cors());
app.use(express.json());

app.get("/home", function (request, response) { // Определяем обработчик для маршрута "/"
    response.sendFile(__dirname + '/express.html'); //Определяем ответ на запрос
});
console.log(__dirname);
app.get("/users", function (request, response) {
    console.log("ЗАПРОС НА ПОЛУЧЕНИЕ SUBSCRIBERS ОБРАБОТАН") // Определяем обработчик для маршрута "/"
    response.sendFile(__dirname + '/users.json'); //Определяем ответ на запрос
});
/***************************ШАБЛОН ДЛЯ GET ЗАПРОСА*************************************************/
/* app.get("/task/1", function (request, response) { // Определяем обработчик для маршрута "/"
    response.sendFile(__dirname + '/task.json'); //Определяем ответ на запрос
}); */
/***************************ШАБЛОН ДЛЯ POST ЗАПРОСА*************************************************/
/* app.post("/task/1", jsonParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    let newTask = req.body.task;
    console.log("ПРИШЕЛ ЗАПРОС НА ДОБАВЛЕНИЕ НОВОГО ЗАДАНИЯ")
    console.log(newTask);

    let data = fs.readFileSync(filePath, "utf8");
    let users = JSON.parse(data);

    users.task.push(newTask);
    console.log("ЗАПРОС ОБРАБОТАН")

    data = JSON.stringify(users);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("task.json", data);

    console.log("СЕРВЕР ОЖИДАЕТ НОВОГО ЗАПРОСА")
    res.send(users);
}); */

app.listen(PORT, () => { console.log(`ЛОКАЛЬНЫЙ СЕРВЕР ЗАПУШЕН ПО АДРЕСУ Localhost: ${PORT}`) }); //Начинаем слушать порт 5000