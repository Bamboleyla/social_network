import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setPageAC,
  getUsers,
  getUserInfo,
  setPreloaderAC,
  usersType,
} from "../../redux/usersPageReducer";
import React from "react";
import Preloader from "../common/Preloader";
import { AppStateType } from "../../redux/redux-store";
import BlockUsers from "./BlockUsers";

//Для того чтобы типизировать классовую компоненту необходимо указать тибы для PropsType и StateType
//Так-как в данном компоненте нет локального State, нам достаточно типизировать PropsType
type PropsType = {
  numberPage: number;
  getUsers: (numberPage: number) => void;
  setPageAC: (num: number) => void;
  getUserInfo: (id: number) => void;
  statusPreloader: boolean;
  totalPages: number;
  users: usersType[];
  unfollow: (num: number) => void;
  follow: (num: number) => void;
  statusButton: Array<number>;
};

class BlockUsersAPI extends React.Component<PropsType> {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    //Получаем массив с пользователями
    this.props.getUsers(this.props.numberPage);
  }
  ////////////////////////////////
  //Обработчик выбраной страницы//
  ////////////////////////////////
  selectedPage = (num: number) => {
    //меняем numberPage в state
    this.props.setPageAC(num);
    //вызываем thunk загрузки массива пользователей
    this.props.getUsers(num);
  };
  /////////////////////////////////////
  //Обработчик выбраного пользователя//
  /////////////////////////////////////
  getUser = (id: number) => {
    this.props.getUserInfo(id);
  };
  /* Вызываем метод, который вернет разметку JSX */
  render() {
    //Если true выводим картинку прелоадера, так как список user еще не загрузился
    return this.props.statusPreloader === true ? (
      <Preloader />
    ) : (
      //false, значит список users загрузился, выводим его
      <BlockUsers
        totalPages={this.props.totalPages}
        numberPage={this.props.numberPage}
        selectedPage={this.selectedPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        getUser={this.getUser}
        disabled={this.props.statusButton}
      />
    );
  }
}

/*************************Контейнерная компонента*****************************/

//Создаем функцию которая будет принимать через connect нужную часть state и делится им с компонентой
let mapStateToProps = (state: AppStateType) => {
  return {
    //массив юзеров
    users: state.usersPage.users,
    //номер страницы, которая сейчас отображается
    numberPage: state.usersPage.numberPage,
    //сколько всего старниц с пользователями
    totalPages: state.usersPage.totalPages,
    //статус прелоадера
    statusPreloader: state.usersPage.statusPreloader,
    //отключение кнопки
    statusButton: state.usersPage.buttonDisabled,
  };
};

//Создаем контейнерную компоненту BlockUsersContainer,подключаем mapStateToProps и передаем ей методы для dispatch , оборачиваем ей презентационную компоненту BlockUsersAPI
export const BlockUsersContainer = connect(mapStateToProps, {
  unfollow,
  follow,
  setPageAC,
  getUsers,
  getUserInfo,
  setPreloaderAC,
})(BlockUsersAPI);
