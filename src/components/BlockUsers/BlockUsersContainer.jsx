import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setPageAC,
  setTotalPagesAC,
  setPreloaderAC,
} from "../../redux/usersPageReducer";
import BlockUsers from "./BlockUsers";
import React from "react";
import Preloader from "../common/Preloader";
import { setUserInfoAC } from "../../redux/postPageReducer";
import { userAPI } from "../../api/api.js";

/*************************Классовая компонента для работы с запросами на сервер*****************************/
/* Создаем классовую компоненту, мы используем ее в место функциональной, что бы не нарушать принцип чистоты функции, если бы использовали функциональную */
class BlockUsersAPI extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    //Включаем preloader
    this.props.setPreloaderAC(true);
    /* Так как у нас пустой стейт, делаем запрос на сервер */
    userAPI.getUsers(this.props.numberPage).then((data) => {
      /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      this.props.setUsersAC(data.users);
      this.props.setTotalPagesAC(data.totalPages);
      //Выключаем preloader
      this.props.setPreloaderAC(false);
    });
  }
  //Обработчик выбраной страницы
  selectedPage = (num) => {
    this.props.setPageAC(num);
    //Включаем preloader
    this.props.setPreloaderAC(true);
    userAPI.getUsers(num).then((data) => {
      // И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой
      this.props.setUsersAC(data.users);
      //Выключаем preloader
      this.props.setPreloaderAC(false);
    });
  };
  //Обработчик выбраного пользователя
  getUser = (id) => {
    //Включаем preloader
    this.props.setPreloaderAC(true);
    //Делаем запрос на получение информации о выбранном пользователе
    userAPI.getUser(id).then((data) => {
      // И диспачем его в state через метод setUserInfoAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой
      this.props.setUserInfoAC(data.user);
      //Выключаем preloader
      this.props.setPreloaderAC(false);
    });
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
        unfollow={this.props.unfollowAC}
        follow={this.props.followAC}
        getUser={this.getUser}
      />
    );
  }
}

/*************************Контейнерная компонента*****************************/

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    //массив юзеров
    users: state.usersPage.users,
    //номер страницы, которая сейчас отображается
    numberPage: state.usersPage.numberPage,
    //сколько всего старниц с пользователями
    totalPages: state.usersPage.totalPages,
    //статус прелоадера
    statusPreloader: state.usersPage.statusPreloader,
  };
};

//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту BlockProfileInfo
const BlockUsersContainer = connect(mapStateToProps, {
  followAC,
  unfollowAC,
  setUsersAC,
  setPageAC,
  setTotalPagesAC,
  setPreloaderAC,
  setUserInfoAC,
})(BlockUsersAPI);
export default BlockUsersContainer;
