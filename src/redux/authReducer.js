import { authAPI } from '../api/api'
import { setUserInfoAC } from './postPageReducer';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_ERRORS = 'SET_AUTH_ERRORS';

//Если в authReduser придет state = undefined будем использывать state по default, первоначальный
let initialState = {
    user: {
        userID: null,
        email: null,
        login: null,
        ava: null,
        status: null,
        isAuth: false
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state, user: action.data, errors: false
            }
        case 'SET_AUTH_ERRORS':
            return {
                ...state,
                errors: action.data
            }

        default:
            return state;
    }
};

/***************************************************************ACTION CREATORS*********************************************************** */
export let setAuthData = (userID, email, login, ava, status, isAuth) => ({ type: SET_USER_DATA, data: { userID, email, login, ava, status, isAuth } })
let setAuthErrors = (status) => {
    if (status === "undefined") {
        return { type: SET_AUTH_ERRORS, data: '*Пользователь с этим email незарегестрирован' }
    } else if (status === 'the password is not correct') {
        return { type: SET_AUTH_ERRORS, data: '*Пароль введен не верно' }
    }
}


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
    try {
        const res = await authAPI.logIn(values.login, values.password, values.rememberMe);
        if (typeof (res.data) === 'string') {
            dispatch(setAuthErrors(res.data))
        } else {
            dispatch(setAuthData(
                res.data.userID,
                res.data.email,
                res.data.login,
                "https://img5.goodfon.ru/original/1024x1024/2/ac/lev-portret-tsar.jpg",
                res.data.status,
                false
            ))
        }

        debugger;
    }
    catch (err) { alert(err) }
}