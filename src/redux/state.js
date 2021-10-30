let state = {
    contentPage: {                                               //Страница с постами
        commentsData: [
            { id: 1, message: "Hello World!", likes: "0" },
            { id: 2, message: "I'ts test message from props", likes: "9" },
            { id: 3, message: "I like it", likes: "10" },
            { id: 4, message: "Yahoo", likes: "5" },
            { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
        ]
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
        ]
    }
}

export let addPost = (text) => {                                //Функция которая добавляет новый текст поста в state
    let idComents = state.contentPage.commentsData.length + 1;
    let newPost = {
        id: idComents,
        message: text,
        likes: 0
    };
    state.contentPage.commentsData.push(newPost);
}

export let addMessage = (text) => {                                //Функция которая добавляет новый текст сообщения в state
    let idMessage = state.dialogsPage.messageData.length + 1;;
    let newMessage = {
        id: idMessage,
        message: text
    };
    state.dialogsPage.messageData.push(newMessage);
    debugger;
}

export default state;