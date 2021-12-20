import { usersAPI, userAPI } from "../api/api";
import { setUserInfoAC } from "./postPageReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_PRELOADER = 'SET_PRELOADER';
const SET_BUTTON_DISABLED = 'SET_BUTTON_DISABLED';

//Если в postPageReducer придет state = undefined будем использывать state по default, первоначальный
let initialState = {
    users: [],
    numberPage: 1,
    totalPages: 5,
    statusPreloader: false,
    buttonDisabled: []
}

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return { ...state, users: [...action.users] }
        case 'SET_CURRENT_PAGE':
            return { ...state, numberPage: action.numberPage }
        case 'SET_TOTAL_PAGES':
            return { ...state, totalPages: action.totalPages }
        case 'SET_PRELOADER':
            return { ...state, statusPreloader: action.statusPreloader }
        case 'SET_BUTTON_DISABLED':
            return { ...state, buttonDisabled: action.status ? [...state.buttonDisabled, action.userID] : state.buttonDisabled.filter(id => id !== action.userID) }
        default: return state;
    }
};

/*****************************************************************************ACTION CREATORS*********************************************************************************************/
export let followAC = (userId) => ({ type: FOLLOW, userId })
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export let setUsersAC = (users) => ({ type: SET_USERS, users })
export let setPageAC = (numberPage) => ({ type: SET_CURRENT_PAGE, numberPage })
export let setTotalPagesAC = (totalPages) => ({ type: SET_TOTAL_PAGES, totalPages })
export let setPreloaderAC = (statusPreloader) => ({ type: SET_PRELOADER, statusPreloader })
export let buttonDisabledAC = (status, userID) => ({ type: SET_BUTTON_DISABLED, status, userID })

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение массива пользователей
export const getUsers = (numberPage) => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Включаем preloader
        dispatch(setPreloaderAC(true));
        //Делаем запрос на сервер за массивом с пользователями
        usersAPI.getUsers(numberPage).then((data) => {
            /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
            dispatch(setUsersAC(data.users));
            dispatch(setTotalPagesAC(data.totalPages));
            //Выключаем preloader
            dispatch(setPreloaderAC(false));
        });
    }
}
//Получение информации о конкретном, выбранном пользователе
export const getUserInfo = (userID) => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Включаем preloader
        dispatch(setPreloaderAC(true));
        //Делаем запрос на получение информации о выбранном пользователе
        userAPI.getUser(userID).then((data) => {
            debugger;
            // И диспачем его в state через метод setUserInfoAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой
            dispatch(setUserInfoAC(data.user));
            //Выключаем preloader
            dispatch(setPreloaderAC(false));
        });
    }
}

//Подписаться на пользователя
export const follow = (userID) => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на подписку к пользователю
        dispatch(buttonDisabledAC(true, userID));
        //Делаем запрос на отмену или активацию подписки к пользователю
        usersAPI.follow(userID, 'true').then((response) => {
            //Если ответ положительный, тогда отписуемся и в state
            if (response.data === true) {
                dispatch(followAC(userID));
                dispatch(buttonDisabledAC(false, userID));
            }
        });
    }
}
//Отписаться от пользователя
export const unfollow = (userID) => {
    //Возврашаем Thunk
    return (dispatch) => {
        //Делаем запрос на отмену подписки к пользователю
        dispatch(buttonDisabledAC(true, userID));
        usersAPI.follow(userID, "false").then((response) => {
            //Если ответ положительный, тогда отписуемся и в state
            if (response.data === true) {
                dispatch(unfollowAC(userID));
                dispatch(buttonDisabledAC(false, userID));
            }
        });
    }
};