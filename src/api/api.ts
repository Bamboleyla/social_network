import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

//Запросы связанные с получением пользователей, данных о пользователе
type getUsersType = {
  users: getUser[];
  numberPage: string;
  totalPages: number;
  totalUsers: number;
};
type followType = boolean;

export const usersAPI = {
  getUsers(num: number) {
    return instance
      .get<getUsersType>(`users?page=${num}`)
      .then((response) => response.data);
  },
  follow(userID: number, status: string) {
    return instance.post<followType>(`follow?id=${userID}&status=${status}`);
  },
};

//Запросы связанные с получением информации о одном конкретном пользователе
type getUser = {
  id: number;
  followed: boolean;
  fullName: string;
  status: string;
  location: {
    country: string;
    sity: string;
  };
  ava: string;
};
type changeStatusType = boolean;

export const userAPI = {
  getUser(id: number) {
    return instance
      .get<getUser>(`user?userId=${id}&action=${"getuser"}`)
      .then((response) => response.data);
  },
  changeStatus(id: number, status: string) {
    return instance
      .put<changeStatusType>(`user`, {
        action: "changeStatus",
        id: id,
        status: status,
      })
      .then((response) => response.data);
  },
};

//Запросы связанные с аунтификацией
type meType = {
  id: number;
  followed: true;
  fullName: string;
  status: string;
  location: {
    country: string;
    sity: string;
  };
  ava: string;
  profileInfo: {
    aboutMe: string;
    study: {
      status: boolean;
      where: null;
    };
    work: {
      status: boolean;
      where: null;
    };
    contact: {
      mob: string;
      email: string;
    };
    age: number;
    sex: string;
  };
  loginInfo: {
    email: string;
    password: string;
  };
};
type logInType = {
  userID: number;
  email: string;
  login: string;
  status: string;
};

export const authAPI = {
  me() {
    return instance.get<meType>(`auth`);
  },
  //Логанизация, отправляем данные на сервер, если есть такой пользователь, все ОК
  logIn(email: string, password: string, rememberMe: boolean = false) {
    return instance.post<logInType>(`api/login`, {
      email,
      password,
      rememberMe,
    });
  },
};
