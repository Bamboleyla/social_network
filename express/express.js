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
const filePath = './users.json'; //константа с местоположением файла где хранятся все пользователи
const users = require('./users.json');//Читаем файл users.json, чтобы знать сколько у нас здесь пользователей
const { mainModule } = require('process');
//Запускаем corse для кросбраузерной, безошибочной работы сервера и преложения на одной локальной машине
app.use(cors());
app.use(express.json());
//функция которая возвращает текущее время;
let now = () => new Date().toLocaleTimeString();
/***************************GET страницу с документацией*************************************************/
app.get("/home", function (request, response) { // Определяем обработчик для маршрута "/"
    response.sendFile(__dirname + '/express.html'); //Определяем ответ на запрос
});

/***************************GET информацио о user или или users******************************************/
app.get("/users", function (request, response) {
    let userId = request.query.userId;                //Проверяем наличие userId, если есть значит запрос за информацией по одному конкретному пользователю, если undefined, то тогда за страницей с users 
    if (!userId) {
        console.log(`${now()} Получен запрос на получение USERS`) // Определяем обработчик для маршрута "/"
        let total_users = users.users.length;            //total_users сколько всего у нас пользователей
        let numberPage = request.query.page;             //указываем, пока жестко какую страницу нужно выгрузить на клиент
        let totalPages = Math.ceil(total_users / 10);    //totalPages сколько всего будет страниц с пользователями
        let usersList = (usersArr, number) => {          //Функция которая делит общее количество пользователей на 10 и возврашает десяток соответствующий номеру страницы
            let result = [];
            let start = number === 1 ? 0 : (number - 1) * 10;
            let finish = number === 1 ? 10 : number * 10;
            let end = finish >= total_users ? total_users : finish;
            for (start; start < end; start++) {
                result.push(usersArr[start])
            };
            return result;
        };
        //Формируем ответ
        let result = { "users": usersList(users.users, numberPage), "numberPage": numberPage, "totalPages": totalPages, "totalUsers": total_users }

        response.send(result); //Отправляем ответ
        console.log(`${now()} Данные USERS отправлены`)
    }
    else {
        console.log(`${now()} Получен запрос на получение информации о user ${userId}`)
        find_a_user = (id) => users.users.find((el) => el.id == id);
        let result = { "user": find_a_user(userId) };
        response.send(result); //Отправляем ответ
        console.log(`${now()} Пользователь ${userId} найден, данные отправлены`)
    };
});
/***************************************GET Ауинтификация***************************************************/
app.get("/auth", function (request, response) { // Определяем обработчик для маршрута "/auth"
    console.log(`${now()} Получен запрос на ауинтификацию`);
    response.send({ 'userID': 1, 'email': 'dvorobjevredstar@mail.ru', 'login': "owner" }); //Определяем ответ на запрос
    console.log(`${now()} ответ отправлен`);
});

/***************************POST ОТПИСАТЬСЯ*************************************************/
app.post("/follow", jsonParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    console.log(`${now()} получен запрос на отмену подписки на пользователя с id = ${req.query.id}`);

    find_a_user = (id) => users.users.find((el) => el.id == id);
    idUser = find_a_user(req.query.id);
    const status = req.query.status === 'true' ? true : false;
    if (idUser.followed !== status) {
        idUser.followed = status;
        data = JSON.stringify(users);
        fs.writeFileSync("./express/users.json", data);
        console.log(`${now()} свойство followed у user id = ${req.query.id} изменено на ${status}`)
    }

    else console.log(`${now()} Ошибка! Нельзя изменить у user id = ${req.query.id} свойство followed на ${status}, так как он уже ${idUser.followed}`)

    // перезаписываем файл с новыми данными


    console.log(`${now()} СЕРВЕР ОЖИДАЕТ НОВОГО ЗАПРОСА`)
    res.send(true);
});


/************************************ШАБЛОН ДЛЯ GET ЗАПРОСА*************************************************/
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

app.listen(PORT, () => { console.log(`${now()} ЛОКАЛЬНЫЙ СЕРВЕР ЗАПУШЕН ПО АДРЕСУ Localhost: ${PORT}`) }); //Начинаем слушать порт 5000