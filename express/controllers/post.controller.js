const db = require('../db')

let now = () => new Date().toLocaleTimeString()//функция которая возвращает текущее время;

class PostController {
    async createPost(req, res) {
        console.log(` ${now()} поступил запрос на создание нового поста`)
        const { title, content, user_Id } = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_Id) values ($1, $2, $3) RETURNING *`, [title, content, user_Id])
        res.json(newPost.rows[0])
        console.log(` ${now()} пост создан`, newPost.rows[0])
    }
    async getOnePostbyUser(req, res) {
        const id = req.query.id
        console.log(` ${now()} поступил запрос на получение поста с пользователя с id `)
        const post = await db.query(`SELECT * FROM post where user_id=$1`, [id])
        res.json(post.rows)
        console.log(` ${now()} запрос обработан`, post.rows)
    }
    async updatePost(req, res) {
        const { title, content, userId } = req.body
        const id = req.body.postId
        console.log(`${now()} поступил запрос на обновление данных поста с id ${id} у пользователя с id ${userId}`)
        const post = await db.query(`UPDATE post set title =$1, content =$2 where id=$3 RETURNING *`, [title, content, id])
        post.rows.length > 0 ? res.json(post.rows[0]) : res.json(`post with id ${id} couldn't update`)
        console.log(`${now()} запрос обработан`)
    }
    async deletePost(req, res) {
        const id = req.query.id
        console.log(`${now()} поступил запрос на удаление поста с id ${id}`)
        await db.query(`DELETE FROM post where id=$1`, [id])
        res.json('ок')
        console.log(`${now()} запрос обработан`)
    }
}

module.exports = new PostController()