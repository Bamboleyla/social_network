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
            newPostText: "Введите сюда ваше сообщение"
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
    },
    getState(){
        return this._state
    },

    addPost () {                                //Функция которая добавляет новый текст поста в state
        let idComents = this._state.contentPage.commentsData.length + 1;
        let newPost = {
            id: idComents,
            message: this._state.contentPage.newPostText,
            likes: 0
        };
        this._state.contentPage.commentsData.push(newPost);
        this._reset(this.getState());                               //Функция которая перерисует DOM с измененным state
    },

    addMessage (text)  {                                //Функция которая добавляет новый текст сообщения в state
        let idMessage = this._state.dialogsPage.messageData.length + 1;;
        let newMessage = {
            id: idMessage,
            message: text
        };
        this._state.dialogsPage.messageData.push(newMessage);
        this._reset(this.getState());                               //Функция которая перерисует DOM с измененным state
    },
    syncingMessage (text) {
        this._state.dialogsPage.newMessageText = text;
    },
    syncingPost (text) {
        this._state.contentPage.newPostText = text;
        this._reset(this.getState());
    },
    _reset () { }, // Функция пустышка, что бы потом ее переопределить под функцию полной перерисовки DOM
    subscribe (observer) { // observer -функция перерисовки дом которую нам передаст index.js через callback
        this._reset = observer;
    }
};

export default store;