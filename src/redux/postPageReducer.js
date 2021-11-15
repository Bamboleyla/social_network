const ADD_POST = 'ADD-POST';
const SYNCING_POST = 'SYNCING-POST';

//Если в postPageReducer придет state = undefined будем использывать state по default, первоначальный
let initialState = {
    commentsData: [
        { id: 1, message: "Hello World!", likes: "0" },
        { id: 2, message: "I'ts test message from props", likes: "9" },
        { id: 3, message: "I like it", likes: "10" },
        { id: 4, message: "Yahoo", likes: "5" },
        { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
    ],
    newPostText: ""
}

export const postPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            /******* Функция которая добавляет новый текст поста в state ******/
            //делаем поверхностную копию state
            let stateCopy = { ...state };
            //Получаем новый id -> Узнаем длинну массива + 1 и вот наш новый id
            let idComents = stateCopy.commentsData.length + 1;
            //Делаем дополнительно копию commentsData, так как поверхнастное копирование копирует только примитивы а на объекты филонит и копирует ссылки
            stateCopy.commentsData = [...state.commentsData];
            //Создаем шаблон newPost 
            let newPost = {
                id: idComents,
                message: stateCopy.newPostText,
                likes: 0
            };
            //Добавляем newPost в наш новый commentsData
            stateCopy.commentsData.push(newPost);
            return stateCopy;
        }
        case 'SYNCING-POST': {
            /****** Добавление в state любого изменения textarea в блоке с постами ******/
            //делаем поверхностную копию state
            let stateCopy = { ...state };
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default: return state;
    }
};
export let addPostAC = () => ({ type: ADD_POST });
export let syncingPostAC = (text) => ({ type: SYNCING_POST, text: text });