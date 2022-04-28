const express = require('express') //подключились к библиотеке экспресс
const app = express() //создаем обьект подключения 
const jsonParser = express.json() // подклячаем Парсер(программа считывающая переданные данные)
const cors = require('cors') // подключение библиотеки cors для преодаление защиты от кросс браузерных запросов
const fs = require("fs") //для чтения и записи в этот файл мы будем использовать встроенный модуль fs
const PORT = 5000
const users = require('./users.json') //Читаем файл users.json, чтобы знать сколько у нас здесь пользователей
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/posts.routes')

//Запускаем corse для кросбраузерной, безошибочной работы сервера и приложения на одной локальной машине
app.use(cors())
//Указываем, метод которым express будет прочитывать строку поступающих к нему запросов;
app.use(express.json())
//Routes
app.use('/api', userRouter)
app.use('/api', postRouter)

//функция которая возвращает текущее время;
let now = () => new Date().toLocaleTimeString()

//функция которая возвращает информацию о пользователе по id;
let find_a_user = (id) => users.users.find((el) => el.id === id)

//функция которая возвращает информацию о пользователе по mail;
let find_a_mail = (mail) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].loginInfo !== undefined) {
            if (users[i].loginInfo.email === mail) {
                return users[i]
            }
        }
    }
};

//функция которая записывает в файл произведенные изменения с определенным пользователем
let writeUsers = () => {
    let data = JSON.stringify(users); //Конвертируем JS значение в JSON объект
    fs.writeFileSync("./express/users.json", data); //Записываем данные в файл
};

/*****************************************************************************************************************************************************************************************/
/**************************************************ЗАПРОСЫ СВЯЗАННЫЕ С ПОЛУЧЕНИЕМ СПИСКА ПОЛЬЗОВАТЕЛЕЙ /USERS*****************************************************************************/
/*****************************************************************************************************************************************************************************************/
app.get("/users", function (request, response) {
    console.log(`${now()} Получен запрос на получение USERS`) // Определяем обработчик для маршрута "/"
    let total_users = users.users.length; //total_users сколько всего у нас пользователей
    let numberPage = request.query.page; //указываем, пока жестко какую страницу нужно выгрузить на клиент
    let totalPages = Math.ceil(total_users / 10); //totalPages сколько всего будет страниц с пользователями
    let usersList = (usersArr, number) => { //Функция которая делит общее количество пользователей на 10 и возврашает десяток соответствующий номеру страницы
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
});
/******************************************************************************************************************************************************************************************/
/***********************************************************ЗАПРОСЫ СВЯЗАННЫЕ С АУИНТИФИКАЦИЕЙ /AUTH***************************************************************************************/
/******************************************************************************************************************************************************************************************/
app.get("/auth", function (request, response) { // Определяем обработчик для маршрута "/auth"
    console.log(`${now()} Получен запрос на ауинтификацию`);
    response.sendFile(__dirname + '/myinfo.json'); //Определяем ответ на запрос
    console.log(`${now()} ответ отправлен`);
});
/***********************************************************ЗАПРОСЫ СВЯЗАННЫЕ С ЛОГАНИЗАЦИЕЙ /AUTH/LOGIN***************************************************************************************/
app.post("/auth/login", function (req, res) { // Определяем обработчик для маршрута "/login"
    console.log(`${now()} Получен запрос на логанизацию`);
    let user = find_a_mail(req.query.mail)
    res.status(300).send(user); //Определяем ответ на запрос
    console.log(`${now()} ответ отправлен`);
});
/******************************************************************************************************************************************************************************************/
/**********************************************************************POST ОТПИСАТЬСЯ*****************************************************************************************************/
/******************************************************************************************************************************************************************************************/
app.post("/follow", jsonParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    console.log(`${now()} получен запрос на отмену подписки на пользователя с id = ${req.query.id}`);

    const idUser = find_a_user(Number(req.query.id)); //Находим информацию о пользователе с нужным id
    const status = req.query.status === 'true' ? true : false; //Узнаем какой статус необходимо установить пользователю
    if (idUser.followed !== status) { //Если статус пользователя не равен статусу который необходимо установить из запроса
        idUser.followed = status; //Изменяем статус пользователя
        writeUsers(); //записываем изменения в ./express/users.json
        console.log(`${now()} свойство followed у user id = ${req.query.id} изменено на ${status}`)
    } else console.log(`${now()} Ошибка! Нельзя изменить у user id = ${req.query.id} свойство followed на ${status}, так как он уже ${idUser.followed}`) // перезаписываем файл с новыми данными
    console.log(`${now()} СЕРВЕР ОЖИДАЕТ НОВОГО ЗАПРОСА`)
    res.send(true);
});
/******************************************************************************************************************************************************************************************/
/*******************************************************ЗАПРОСЫ СВЯЗАННЫЕ С КОНКРЕТНЫМ ПОЛЬЗОВАТЕЛЕМ /USER*********************************************************************************/
/******************************************************************************************************************************************************************************************/
app.get("/user", function (request, response) { // Определяем endpoint
    let userId = request.query.userId;
    let action = request.query.action;
    switch (action) {
        case 'getuser':
            console.log(`${now()} Получен запрос на получение информации о user ${userId}`)
            let result = { "user": find_a_user(Number(userId)) };
            response.send(result); //Отправляем ответ
            return console.log(`${now()} Пользователь ${userId} найден, данные отправлены`)
        default:
            console.log(`${now()} Произошла ошибка! Запрос ${request.originalUrl} не обработан`)

    }

});
app.put("/user", function (request, response) { // Определяем endpoint
    console.log(`${now()} Получен запрос на изменение информации о user`);
    let action = request.body.action;
    let userId = request.body.id;
    switch (action) {
        case 'changeStatus':
            console.log(`${now()} Получен запрос на изменение информации о user ${userId}`);
            let result = { "user": find_a_user(Number(userId)) };
            result.user.status = request.body.status;
            writeUsers(); //записываем изменения в ./express/users.json
            response.send(true); //Отправляем ответ
            return console.log(`${now()} Статус ${userId} изменен на ${request.body.status}`)
        default:
            console.log(`${now()} Произошла ошибка! Запрос ${request.originalUrl} не обработан`);

    }

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