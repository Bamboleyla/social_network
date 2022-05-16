import { ThunkAction } from "redux-thunk";
import { usersAPI, userAPI } from "../api/api";
import { AppStateType, InferActyonsType } from "./redux-store";
import { actions as actionsPost } from "./postPageReducer";

export type usersType = {
  id: number;
  followed: boolean;
  fullName: string;
  status: string;
  location: { country: string; sity: string };
  ava: string;
};

export let initialState = {
  users: [] as usersType[],
  numberPage: 1,
  totalPages: 5,
  statusPreloader: false,
  buttonDisabled: [] as Array<number>, //массив с id пользователей
};

export type initialStateType = typeof initialState;

//Общий тип action состоящий из всех actions которые можно отработать в usersPageReducer
type ActionsType = InferActyonsType<typeof actions>;

export const usersPageReducer = (
  state = initialState,
  action: ActionsType
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
export const actions = {
  followAC: (userId: number) =>
    ({
      type: "FOLLOW",
      userId,
    } as const),

  unfollowAC: (userId: number) =>
    ({
      type: "UNFOLLOW",
      userId,
    } as const),
  setUsersAC: (users: usersType[]) =>
    ({
      type: "SET_USERS",
      users,
    } as const),

  setPageAC: (numberPage: number) =>
    ({
      type: "SET_CURRENT_PAGE",
      numberPage,
    } as const),

  setTotalPagesAC: (totalPages: number) =>
    ({
      type: "SET_TOTAL_PAGES",
      totalPages,
    } as const),
  setPreloaderAC: (statusPreloader: boolean) =>
    ({
      type: "SET_PRELOADER",
      statusPreloader,
    } as const),

  buttonDisabledAC: (status: boolean, userID: number) =>
    ({
      type: "SET_BUTTON_DISABLED",
      status,
      userID,
    } as const),
  setUserInfoAC: actionsPost.setUserInfoAC,
};

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/

//Получение массива пользователей
//Тип ThunkAction принимает аргументы(что возвращает?,тип глобального State, спец action, перечень типов actions)
export const getUsers = (
  numberPage: number
): ThunkAction<void, AppStateType, unknown, ActionsType> => {
  //Возврашаем Thunk
  return (dispatch) => {
    //Включаем preloader
    dispatch(actions.setPreloaderAC(true));
    //Делаем запрос на сервер за массивом с пользователями
    usersAPI.getUsers(numberPage).then((data: any) => {
      /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      dispatch(actions.setUsersAC(data.users));
      dispatch(actions.setTotalPagesAC(data.totalPages));
      //Выключаем preloader
      dispatch(actions.setPreloaderAC(false));
    });
  };
};

//Получение информации о конкретном, выбранном пользователе
export const getUserInfo = (
  userID: number
): ThunkAction<void, AppStateType, unknown, ActionsType> => {
  //Возврашаем Thunk
  return (dispatch) => {
    //Включаем preloader
    dispatch(actions.setPreloaderAC(true));
    //Делаем запрос на получение информации о выбранном пользователе
    userAPI.getUser(userID).then((data: any) => {
      // И диспачем его в state через метод setUserInfoAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой
      dispatch(actionsPost.setUserInfoAC(data.user));
      //Выключаем preloader
      dispatch(actions.setPreloaderAC(false));
    });
  };
};

//Подписаться на пользователя
export const follow = (
  userID: number
): ThunkAction<void, AppStateType, unknown, ActionsType> => {
  //Возврашаем Thunk
  return (dispatch) => {
    //Делаем запрос на подписку к пользователю
    dispatch(actions.buttonDisabledAC(true, userID));
    //Делаем запрос на отмену или активацию подписки к пользователю
    usersAPI.follow(userID, "true").then((response: any) => {
      //Если ответ положительный, тогда отписуемся и в state
      if (response.data === true) {
        dispatch(actions.followAC(userID));
        dispatch(actions.buttonDisabledAC(false, userID));
      }
    });
  };
};
//Отписаться от пользователя
export const unfollow = (
  userID: number
): ThunkAction<void, AppStateType, unknown, ActionsType> => {
  //Возврашаем Thunk
  return (dispatch) => {
    //Делаем запрос на отмену подписки к пользователю
    dispatch(actions.buttonDisabledAC(true, userID));
    usersAPI.follow(userID, "false").then((response: any) => {
      //Если ответ положительный, тогда отписуемся и в state
      if (response.data === true) {
        dispatch(actions.unfollowAC(userID));
        dispatch(actions.buttonDisabledAC(false, userID));
      }
    });
  };
};
