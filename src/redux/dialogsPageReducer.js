const ADD_MESSAGE = 'ADD-MESSAGE';
const SYNCING_MESSAGE = 'SYNCING-MESSAGE';

export const dialogsPageReducer = (state, action) => {
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