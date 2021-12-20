import { connect } from "react-redux";
import {
  addPostAC,
  syncingPostAC,
  updateStatus,
} from "../../../redux/postPageReducer";
import BlockProfileInfo from "./BlockProfileInfo";

/*************************Контейнерная компонента*****************************/

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    newPostText: state.postsPage.newPostText,
    userPhoto: state.postsPage.userInfo.userPhoto,
    userStatus: state.postsPage.userInfo.status,
    userID: state.postsPage.userInfo.userID,
  };
};
//Создаем функцию которая будет принимать через connect необходимые dispatch из store
let mapDispatchToProps = (dispatch) => {
  return {
    // Команда добавления нового поста в state
    addPost: () => {
      dispatch(addPostAC());
      dispatch(syncingPostAC(""));
    },
    // Отправка текста из textarea в state
    syncing: (text) => {
      dispatch(syncingPostAC(text));
    },
    updateStatus,
  };
};
//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту BlockProfileInfo
const BlockProfileInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockProfileInfo);

export default BlockProfileInfoContainer;
