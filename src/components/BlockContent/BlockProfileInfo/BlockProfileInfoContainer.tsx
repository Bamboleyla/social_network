import { connect } from "react-redux";
import { addPostAC, updateStatus } from "../../../redux/postPageReducer";
import { AppStateType } from "../../../redux/redux-store";
import BlockProfileInfo from "./BlockProfileInfo";

/*************************Контейнерная компонента*****************************/

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state: AppStateType) => {
  return {
    newPostText: state.postsPage.newPostText,
    userPhoto: state.postsPage.userInfo.userPhoto,
    userStatus: state.postsPage.userInfo.status,
    userID: state.postsPage.userInfo.userID,
  };
};
//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту BlockProfileInfo
const BlockProfileInfoContainer = connect(mapStateToProps, {
  addPostAC,
  updateStatus,
})(BlockProfileInfo);

export default BlockProfileInfoContainer;
