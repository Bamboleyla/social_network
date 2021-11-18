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
            //Возврашаем новый state в виде копии старого с добавлением нового сообщения, но более глубокие копии делаем только тех частей state которые будут изменены при выполнении action
            return {
                ...state, messageData: [...state.messageData, {
                    id: idMessage,
                    message: state.newMessageText
                }]
            };
        case 'SYNCING-MESSAGE':
            //делаем поверхностную копию state, меняем свойство newMessageText, возврашаем
            return { ...state, newMessageText: action.text };
        default:
            return state;

    }
}
export let addMessageAC = () => ({ type: ADD_MESSAGE });
export let syncingMessageAC = (text) => ({ type: SYNCING_MESSAGE, text: text });