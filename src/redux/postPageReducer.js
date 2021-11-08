const ADD_POST = 'ADD-POST';
const SYNCING_POST = 'SYNCING-POST';

export const postPageReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            //Функция которая добавляет новый текст поста в state
            let idComents = state.commentsData.length + 1;
            let newPost = {
                id: idComents,
                message: state.newPostText,
                likes: 0
            };
            state.commentsData.push(newPost);
            return state;
        case 'SYNCING-POST':
            //Добавление в state любого изменения textarea в блоке с постами
            state.newPostText = action.text;
            return state;
        default: return state;
    }
};
export let addPostAC = () => ({ type: ADD_POST });
export let syncingPostAC = (text) => ({ type: SYNCING_POST, text: text });