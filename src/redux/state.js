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
    getState() {
        return this._state
    },

    _reset() { }, // Функция пустышка, что бы потом ее переопределить под функцию полной перерисовки DOM
    subscribe(observer) { // observer -функция перерисовки дом которую нам передаст index.js через callback
        this._reset = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            //Функция которая добавляет новый текст поста в state
            let idComents = this._state.contentPage.commentsData.length + 1;
            let newPost = {
                id: idComents,
                message: this._state.contentPage.newPostText,
                likes: 0
            };
            this._state.contentPage.commentsData.push(newPost);
            this._reset(this.getState());                               //Функция которая перерисует DOM с измененным state    
        }
        else if (action.type === 'SYNCING-POST') {
            //Добавление в state любого изменения textarea в блоке с постами
            this._state.contentPage.newPostText = action.text;
            this._reset(this.getState());
        }
        else if (action.type === 'ADD-MESSAGE') {
            //*****Функция которая добавляет новый текст сообщения в state*****
            //Получаем новый id -> Узнаем длинну массива + 1 и вот наш новый id
            let idMessage = this._state.dialogsPage.messageData.length + 1;;
            //Создаем объект сообщения с обязательными свойствами id и message    
            let newMessage = {
                id: idMessage,
                message: this._state.dialogsPage.newMessageText
            };
            //Добавляем в state объект нового сообщения        
            this._state.dialogsPage.messageData.push(newMessage);
            //Перерисовываем DOM
            this._reset(this.getState());
        }
        else if (action.type === 'SYNCING-MESSAGE') {
            debugger;
            //Добавление в state любого изменения textarea в блоке с сообщениями
            this._state.dialogsPage.newMessageText = action.text;
            this._reset(this.getState());
        }
    }
};

//**********************ACTION CREATORS***************************
export let addPostAC = () => ({ type: ADD_POST });
export let syncingPostAC = (text) => ({ type: SYNCING_POST, text: text });
export let addMessageAC = () => ({ type: ADD_MESSAGE });
export let syncingMessageAC = (text) => ({ type: SYNCING_MESSAGE, text: text });

export default store;