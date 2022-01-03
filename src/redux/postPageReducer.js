import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERINFO = 'SET_USERINFO';
const UPDATE_STATUS = 'UPDATE_STATUS';
//Если в postPageReducer придет state = undefined будем использывать state по default, первоначальный
let initialState = {
    //Информация о пользователе
    userInfo: {
        userID: null,
        userPhoto: null,
        status: null
    },
    //Информация о постах пользователя
    commentsData: [
        { id: 1, message: "Hello World!", likes: "0" },
        { id: 2, message: "I'ts test message from props", likes: "9" },
        { id: 3, message: "I like it", likes: "10" },
        { id: 4, message: "Yahoo", likes: "5" },
        { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
    ],
    //Информация о новом посте
    newPostText: ""
}

export const postPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            /******* Функция которая добавляет новый текст поста в state ******/
            //Получаем новый id -> Узнаем длинну массива + 1 и вот наш новый id
            let idComents = state.commentsData.length + 1;
            //Возврашаем новый state в виде копии старого с добавлением нового сообщения, но более глубокие копии делаем только тех частей state которые будут изменены при выполнении action
            return {
                ...state,
                commentsData: [...state.commentsData, {
                    id: idComents,
                    message: action.post,
                    likes: 0
                }]
            };
        case 'SET_USERINFO':
            return { ...state, userInfo: { userID: action.userInfo.id, userPhoto: action.userInfo.ava, status: action.userInfo.status } };
        case 'UPDATE_STATUS':
            return { ...state, userInfo: { ...state.userInfo, status: action.status } };
        default:
            return state;
    }
};
/*****************************************************************************ACTION CREATORS**********************************************************************************************/
export let addPostAC = (post) => ({ type: ADD_POST, post });
export let setUserInfoAC = (userInfo) => ({ type: SET_USERINFO, userInfo });
export let updateStatusAC = (status) => ({ type: UPDATE_STATUS, status });
/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Изменить статус пользователя
export const updateStatus = (userID, status) => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на изменение статуса пользователя с userID
        userAPI.changeStatus(userID, status).then((response) => {
            //Если ответ положительный, тогда изменяем статус в state
            if (response.data === true) {
                dispatch(updateStatusAC(status));
            }
        });
    }
};