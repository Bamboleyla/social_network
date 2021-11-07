//**************Константы для Action Creators*****************
const ADD_POST = 'ADD-POST';
const SYNCING_POST = 'SYNCING-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const SYNCING_MESSAGE = 'SYNCING-MESSAGE';

//*************************STORE******************************
let store = {
    _state: {
        contentPage: {                                               //Страница с постами
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
        newMessageText: "Введите сюда ваше сообщение"
    }
}

export let addPost = () => {                                //Функция которая добавляет новый текст поста в state
    let idComents = state.contentPage.commentsData.length + 1;
    let newPost = {
        id: idComents,
        message: state.contentPage.newPostText,
        likes: 0
    };
    state.contentPage.commentsData.push(newPost);
    reset(state);                               //Функция которая перерисует DOM с измененным state
}

export let addMessage = (text) => {                                //Функция которая добавляет новый текст сообщения в state
    let idMessage = state.dialogsPage.messageData.length + 1;;
    let newMessage = {
        id: idMessage,
        message: text
    };
    state.dialogsPage.messageData.push(newMessage);
    reset(state);                               //Функция которая перерисует DOM с измененным state
}
export let syncingMessage = (text) => {
    state.dialogsPage.newMessageText = text;
}

export let syncingPost = (text) => {
    state.contentPage.newPostText = text;
    reset(state);
}

let reset = () => { }; // Функция пустышка, что бы потом ее переопределить под функцию полной перерисовки DOM
export let subscribe = (observer) => { // observer -функция перерисовки дом которую нам передаст index.js через callback
    reset = observer;
}

//**********************ACTION CREATORS***************************
export let addPostAC = () => ({ type: ADD_POST });
export let syncingPostAC = (text) => ({ type: SYNCING_POST, text: text });
export let addMessageAC = () => ({ type: ADD_MESSAGE });
export let syncingMessageAC = (text) => ({ type: SYNCING_MESSAGE, text: text });

export default store;
