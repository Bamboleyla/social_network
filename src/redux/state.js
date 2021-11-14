import { dialogsPageReducer } from "./dialogsPageReducer.js";
import { postPageReducer } from "./postPageReducer.js";

let store = {
    _state: {
        postsPage: {                                               //Страница с постами
            commentsData: [
                { id: 1, message: "Hello World!", likes: "0" },
                { id: 2, message: "I'ts test message from props", likes: "9" },
                { id: 3, message: "I like it", likes: "10" },
                { id: 4, message: "Yahoo", likes: "5" },
                { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
            ],
            newPostText: ""
        },
        dialogsPage: {                                              //Страница с сообщениями
            dialogsData: [
                { id: 1, name: "Dmitriy" },
                { id: 2, name: "Luba" },
                { id: 3, name: "Gleb" },
                { id: 4, name: "Masha" },
                { id: 5, name: "Anya" },
                { id: 6, name: "Bulya" },
                { id: 7, name: "Lusya" },
                { id: 8, name: "Vitya" },
            ],
            messageData: [
                { id: 1, message: "Hi, have a nice day!" },
                { id: 2, message: "And good luck on your project!" },
                { id: 3, message: "React is wonderful!" },
            ],
            newMessageText: ""
        }
    },

    getState() {
        return this._state
    },

    _reset() { }, // Функция пустышка, что бы потом ее переопределить под функцию полной перерисовки DOM
    subscribe(observer) { // observer -функция перерисовки дом которую нам передаст index.js через callback
        this._reset = observer;
    },
    /*******************************Dispatch&Reducers***********************************/
    dispatch(action) {
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.postsPage = postPageReducer(this._state.postsPage, action);
        this._reset();
    }
}


export default store;
