import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

//Запросы связанные с получением пользователей, данных о пользователе
export const usersAPI = {
    getUsers(num) {
        return instance.get(`users?page=${num}`).then(response => response.data)
    },
    follow(userID, status) {
        return instance
            .post(
                `follow?id=${userID}&status=${status}`
            )
    }
}

//Запросы связанные с получением информации о одном конкретном пользователе
export const userAPI = {
    getUser(id) {
        return instance.get(`users?userId=${id}`).then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`user?statusId=${id}&status=${'get_status'}`).then(response => response.data)
    },
}

//Запросы связанные с аунтификацией
export const authAPI = {
    me() {
        return instance.get(`auth`)
    }
}