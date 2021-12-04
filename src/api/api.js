import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

//Запросы связанные с получением пользователей, данных о пользователе
export const userAPI = {
    getUsers(num) {
        return instance.get(`users?page=${num}`).then(response => response.data)
    },
    getUser(id) {
        return instance.get(`users?userId=${id}`).then(response => response.data)
    },
    follow(userID, status) {
        return instance
            .post(
                `follow?id=${userID}&status=${status}`
            )
    }
}

//Запросы связанные с аунтификацией
export const authAPI = {
    me() {
        return instance.get(`auth`)
    }
}