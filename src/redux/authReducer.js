import { authAPI } from '../api/api'
import { setUserInfoAC } from './postPageReducer';
const SET_USER_DATA = 'SET_USER_DATA';

//Если в authReduser придет state = undefined будем использывать state по default, первоначальный
let initialState = {
    userID: null,
    email: null,
    login: null,
    ava: null,
    status: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
};

/***************************************************************ACTION CREATORS*********************************************************** */
export let setAuthData = (userID, email, login, ava, status, isAuth) => ({ type: SET_USER_DATA, data: { userID, email, login, ava, status, isAuth } })

/* *************************************************************THUNKS-CREATOR*********************************************************** */
//Получение информации о аунтифицированном пользователе
export const getAuthData = () => {
    //Возврашаем Thunk
    return (dispatch) => {
        /* Так как у нас пустой стейт, делаем запрос на сервер */
        authAPI.me().then((response) => {
            /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
            dispatch(setAuthData(
                response.data.userID,
                response.data.email,
                response.data.login,
                response.data.ava,
                response.data.status,
                false
            ));
            //диспачим в state postPageReducer что бы на странице пользователя изначально отобразился наш профиль
            dispatch(setUserInfoAC({ id: response.data.id, ava: response.data.ava, status: response.data.status }));
        });
    }
}
//Отправка данных позученных из формы на сервер
export const logIn = (values) => async (dispatch) => {
    const res = await authAPI.logIn(values.login, values.password, values.rememberMe);
    dispatch(setAuthData(
        res.data.userID,
        res.data.email,
        res.data.login,
        res.data.ava,
        res.data.status,
        false
    ));
}