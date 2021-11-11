const ADD_MESSAGE = 'ADD-MESSAGE';
const SYNCING_MESSAGE = 'SYNCING-MESSAGE';

//Если в dialogsPageReducer придет state = undefined будем использывать state по default, первоначальный
let initialState = {                                             
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
};

export const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            //*****Функция которая добавляет новый текст сообщения в state*****
            //Получаем новый id -> Узнаем длинну массива + 1 и вот наш новый id
            let idMessage = state.messageData.length + 1;;
            //Создаем объект сообщения с обязательными свойствами id и message    
            let newMessage = {
                id: idMessage,
                message: state.newMessageText
            };
            //Добавляем в state объект нового сообщения        
            state.messageData.push(newMessage);
            return state;
        case 'SYNCING-MESSAGE':
            //Добавление в state любого изменения textarea в блоке с сообщениями
            state.newMessageText = action.text;
            return state;
        default:
            return state;

    }
}
export let addMessageAC = () => ({ type: ADD_MESSAGE });
export let syncingMessageAC = (text) => ({ type: SYNCING_MESSAGE, text: text });