const SET_USER_DATA = 'SET_USER_DATA';

//Если в authReduser придет state = undefined будем использывать state по default, первоначальный
let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }

        default: return state;
    }
};

export let setAuthData = (userID, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userID, email, login, isAuth } })