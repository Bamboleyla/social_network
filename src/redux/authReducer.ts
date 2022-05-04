import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { actions as actionsPost } from "./postPageReducer";
import { AppStateType, InferActyonsType } from "./redux-store";

let initialState = {
  user: {
    userID: null as null | number,
    email: null as null | string,
    login: null as null | string,
    ava: null as null | string,
    status: null as null | string,
    isAuth: false,
    errors: null as boolean | null,
  },
};

export type initialStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: { type: string; data: initialStateType | string }
) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.data,
        errors: false,
      };
    case "SET_AUTH_ERRORS":
      return {
        ...state,
        errors: action.data,
      };

    default:
      return state;
  }
};

/***************************************************************ACTION CREATORS*********************************************************** */
export const actions = {
  setAuthData: (
    userID: number,
    email: string,
    login: string,
    ava: string,
    status: string,
    isAuth: boolean
  ) =>
    ({
      type: "SET_USER_DATA",
      data: { userID, email, login, ava, status, isAuth },
    } as const),
  setAuthErrors: (status: string) => {
    let data = "";
    if (status === "undefined")
      data = "*Пользователь с этим email незарегестрирован";
    else if (status === "the password is not correct")
      data = "*Пароль введен не верно";
    return { type: "SET_AUTH_ERRORS", data } as const;
  },
  //Добавляем используемые экшены из других редюсеров
  setUserInfoAC: actionsPost.setUserInfoAC,
};

//Общий тип action состоящий из всех actions которые можно отработать в usersPageReducer
type ActionsType = InferActyonsType<typeof actions>;

/* *************************************************************THUNKS-CREATOR*********************************************************** */
//Получение информации о аунтифицированном пользователе
export const getAuthData = (): ThunkAction<
  void,
  AppStateType,
  unknown,
  ActionsType
> => {
  //Возврашаем Thunk
  return (dispatch): void => {
    /* Так как у нас пустой стейт, делаем запрос на сервер */
    authAPI.me().then((response: any) => {
      /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      dispatch(
        actions.setAuthData(
          response.data.userID,
          response.data.email,
          response.data.login,
          response.data.ava,
          response.data.status,
          false
        )
      );
      //диспачим в state postPageReducer что бы на странице пользователя изначально отобразился наш профиль
      dispatch(
        actions.setUserInfoAC({
          id: response.data.id,
          ava: response.data.ava,
          status: response.data.status,
        })
      );
    });
  };
};
//Отправка данных позученных из формы на сервер
export const logIn =
  (values: { login: string; password: string; rememberMe: boolean }) =>
  async (dispatch: any) => {
    try {
      const res = await authAPI.logIn(
        values.login,
        values.password,
        values.rememberMe
      );
      if (typeof res.data === "string") {
        dispatch(actions.setAuthErrors(res.data));
      } else {
        dispatch(
          actions.setAuthData(
            res.data.userID,
            res.data.email,
            res.data.login,
            "https://img5.goodfon.ru/original/1024x1024/2/ac/lev-portret-tsar.jpg",
            res.data.status,
            false
          )
        );
      }
    } catch (err) {
      alert(err);
    }
  };
