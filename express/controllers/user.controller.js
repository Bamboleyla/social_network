const db = require('../db')

let now = () => new Date().toLocaleTimeString()//функция которая возвращает текущее время;

class UserController {
    async createUser(req, res) {
        console.log(` ${now()} поступил запрос на создание нового пользователя`)
        const { email, password } = req.body
        const newPerson = await db.query(`INSERT INTO person (email, password) values ($1, $2) RETURNING *`, [email, password])
        res.json(newPerson.rows[0])
        console.log(` ${now()} пользователь создан`, newPerson.rows[0])
    }
    async getUsers(req, res) {
        console.log(`${now()} поступил запрос на получение списка пользователей`)
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
        console.log(`${now()} запрос обработан`, users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        console.log(`${now()} поступил запрос на получение данных о пользователе с id ${id}`)
        const user = await db.query(`SELECT * FROM person where id=$1`, [id])
        user.rows.length > 0 ? res.json(user.rows[0]) : res.json(`user with id ${id} not found`)
        console.log(`${now()} запрос обработан`)
    }
    async updateUser(req, res) {
        const { id, email, password } = req.body
        console.log(`${now()} поступил запрос на обновление данных у пользователя с id ${id}`)
        const user = await db.query(`UPDATE person set email =$1, password =$2 where id=$3 RETURNING *`, [email, password, id])
        user.rows.length > 0 ? res.json(user.rows[0]) : res.json(`user with id ${id} couldn't update`)
        console.log(`${now()} запрос обработан`)
    }
    async deleteUser(req, res) {
        const id = req.params.id
        console.log(`${now()} поступил запрос на обновление данных у пользователя с id ${id}`)
        await db.query(`DELETE FROM person where id=$1`, [id])
        res.json('ок')
        console.log(`${now()} запрос обработан`)
    }
    async logIn(req, res) {
        const email = req.body.email
        console.log(`${now()} поступил запрос на сверку login и password с данными в БД`)
        const resDB = await db.query(`SELECT * FROM person where email_unique=$1`, [email])
        if (resDB.rows[0].password === req.body.password) {
            res.json({
                userID: resDB.rows[0].id,
                email: resDB.rows[0].email_unique,
                login: resDB.rows[0].nickname,
                status: resDB.rows[0].status
            })
        }
        else if (resDB.rows.password !== req.body.password) {
            res.json('password is wrong')
        }
        else if (resDB.rows.length === 0) {
            res.json('logis is undefined')
        }
        else res.json('error during login and password verification')
        console.log(`${now()} запрос обработан`)
    }
}

module.exports = new UserController()