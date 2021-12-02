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
            return { ...state, buttonDisabled: action.status ? [...state.buttonDisabled, action.userID] : state.buttonDisabled.filter(id => id != action.userID) }
        default: return state;
    }
};

export let followAC = (userId) => ({ type: FOLLOW, userId })
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export let setUsersAC = (users) => ({ type: SET_USERS, users })
export let setPageAC = (numberPage) => ({ type: SET_CURRENT_PAGE, numberPage })
export let setTotalPagesAC = (totalPages) => ({ type: SET_TOTAL_PAGES, totalPages })
export let setPreloaderAC = (statusPreloader) => ({ type: SET_PRELOADER, statusPreloader })
export let buttonDisabledAC = (status, userID) => ({ type: SET_BUTTON_DISABLED, status, userID })
