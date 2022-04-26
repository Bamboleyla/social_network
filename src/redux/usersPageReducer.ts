import { usersAPI, userAPI } from "../api/api";
import { setUserInfoAC } from "./postPageReducer";

const FOLLOW: "FOLLOW" = "FOLLOW";
const UNFOLLOW: "UNFOLLOW" = "UNFOLLOW";
const SET_USERS: "SET_USERS" = "SET_USERS";
const SET_CURRENT_PAGE: "SET_CURRENT_PAGE" = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGES: "SET_TOTAL_PAGES" = "SET_TOTAL_PAGES";
const SET_PRELOADER: "SET_PRELOADER" = "SET_PRELOADER";
const SET_BUTTON_DISABLED: "SET_BUTTON_DISABLED" = "SET_BUTTON_DISABLED";

export type usersType = {
  id: number;
  followed: boolean;
  fullName: string;
  status: string;
  location: { country: string; sity: string };
  ava: string;
};

let initialState = {
  users: [] as usersType[],
  numberPage: 1,
  totalPages: 5,
  statusPreloader: false,
  buttonDisabled: [] as Array<number>, //массив с id пользователей
};

export type initialStateType = typeof initialState;

export const usersPageReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return { ...state, users: [...action.users] };
    case "SET_CURRENT_PAGE":
      return { ...state, numberPage: action.numberPage };
    case "SET_TOTAL_PAGES":
      return { ...state, totalPages: action.totalPages };
    case "SET_PRELOADER":
      return { ...state, statusPreloader: action.statusPreloader };
    case "SET_BUTTON_DISABLED":
      return {
        ...state,
        buttonDisabled: action.status
          ? [...state.buttonDisabled, action.userID]
          : state.buttonDisabled.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};

/*****************************************************************************ACTION CREATORS*********************************************************************************************/
type followACType = { type: typeof FOLLOW; userId: number };
export let followAC = (userId: number): followACType => ({
  type: FOLLOW,
  userId,
});

type unfollowACType = { type: typeof UNFOLLOW; userId: number };
export let unfollowAC = (userId: number): unfollowACType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersACType = { type: typeof SET_USERS; users: usersType[] };
export let setUsersAC = (users: usersType[]): setUsersACType => ({
  type: SET_USERS,
  users,
});

type setPageACType = {
  type: typeof SET_CURRENT_PAGE;
  numberPage: number;
};
export let setPageAC = (numberPage: number): setPageACType => ({
  type: SET_CURRENT_PAGE,
  numberPage,
});

type setTotalPagesACType = {
  type: typeof SET_TOTAL_PAGES;
  totalPages: number;
};
export let setTotalPagesAC = (totalPages: number): setTotalPagesACType => ({
  type: SET_TOTAL_PAGES,
  totalPages,
});

type setPreloaderACType = {
  type: typeof SET_PRELOADER;
  statusPreloader: boolean;
};
export let setPreloaderAC = (statusPreloader: boolean): setPreloaderACType => ({
  type: SET_PRELOADER,
  statusPreloader,
});

type buttonDisabledACType = {
  type: typeof SET_BUTTON_DISABLED;
  status: boolean;
  userID: number;
};
export let buttonDisabledAC = (
  status: boolean,
  userID: number
): buttonDisabledACType => ({
  type: SET_BUTTON_DISABLED,
  status,
  userID,
});

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Получение массива пользователей
export const getUsers = (numberPage: number) => {
  //Возврашаем Thunk
  return (dispatch: any) => {
    //Включаем preloader
    dispatch(setPreloaderAC(true));
    //Делаем запрос на сервер за массивом с пользователями
    usersAPI.getUsers(numberPage).then((data: any) => {
      /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      dispatch(setUsersAC(data.users));
      dispatch(setTotalPagesAC(data.totalPages));
      //Выключаем preloader
      dispatch(setPreloaderAC(false));
    });
  };
};
//Получение информации о конкретном, выбранном пользователе
export const getUserInfo = (userID: number) => {
  //Возврашаем Thunk
  return (dispatch: any) => {
    //Включаем preloader
    dispatch(setPreloaderAC(true));
    //Делаем запрос на получение информации о выбранном пользователе
    userAPI.getUser(userID).then((data: any) => {
      // И диспачем его в state через метод setUserInfoAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой
      dispatch(setUserInfoAC(data.user));
      //Выключаем preloader
      dispatch(setPreloaderAC(false));
    });
  };
};

//Подписаться на пользователя
export const follow = (userID: number) => {
  //Возврашаем Thunk
  return (dispatch: any) => {
    //Делаем запрос на подписку к пользователю
    dispatch(buttonDisabledAC(true, userID));
    //Делаем запрос на отмену или активацию подписки к пользователю
    usersAPI.follow(userID, "true").then((response: any) => {
      //Если ответ положительный, тогда отписуемся и в state
      if (response.data === true) {
        dispatch(followAC(userID));
        dispatch(buttonDisabledAC(false, userID));
      }
    });
  };
};
//Отписаться от пользователя
export const unfollow = (userID: number) => {
  //Возврашаем Thunk
  return (dispatch: any) => {
    //Делаем запрос на отмену подписки к пользователю
    dispatch(buttonDisabledAC(true, userID));
    usersAPI.follow(userID, "false").then((response: any) => {
      //Если ответ положительный, тогда отписуемся и в state
      if (response.data === true) {
        dispatch(unfollowAC(userID));
        dispatch(buttonDisabledAC(false, userID));
      }
    });
  };
};
