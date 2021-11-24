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
import * as axios from "axios";
import Preloader from "../common/Preloader";

/*************************Классовая компонента для работы с запросами на сервер*****************************/
/* Создаем классовую компоненту, мы используем ее в место функциональной, что бы не нарушать принцип чистоты функции, если бы использовали функциональную */
class BlockUsersAPI extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    //Включаем preloader
    this.props.setPreloader(true);
    /* Так как у нас пустой стейт, делаем запрос на сервер */
    axios
      .get(`http://localhost:5000/users?page=${this.props.numberPage}`)
      .then((response) => {
        /* И диспачем его в state через метод setUsers, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
        this.props.setUsers(response.data.users);
        this.props.setTotalPages(response.data.totalPages);
        //Выключаем preloader
        this.props.setPreloader(false);
      });
  }
  //Обработчик выбраной страницы
  selectedPage = (num) => {
    this.props.setNumberPage(num);
    //Включаем preloader
    this.props.setPreloader(true);
    axios.get(`http://localhost:5000/users?page=${num}`).then((response) => {
      /* И диспачем его в state через метод setUsers, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      this.props.setUsers(response.data.users);
      //Выключаем preloader
      this.props.setPreloader(false);
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
        unfollow={this.props.unfollow}
        follow={this.props.follow}
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
//Создаем функцию которая будет принимать через connect необходимые dispatch из store
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setNumberPage: (number) => {
      dispatch(setPageAC(number));
    },
    setTotalPages: (total) => {
      dispatch(setTotalPagesAC(total));
    },
    setPreloader: (status) => {
      dispatch(setPreloaderAC(status));
    },
  };
};
//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту BlockProfileInfo
const BlockUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockUsersAPI);
export default BlockUsersContainer;
