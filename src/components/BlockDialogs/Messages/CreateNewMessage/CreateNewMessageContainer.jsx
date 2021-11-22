import { connect } from "react-redux";
import {
  addMessageAC,
  syncingMessageAC,
} from "../../../../redux/dialogsPageReducer";
import CreateNewMessage from "./CreateNewMessage";

/*************************Контейнерная компонента*****************************/
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};
//Создаем функцию которая будет принимать через connect необходимые dispatch из store
let mapDispatchToProps = (dispatch) => {
  return {
    //Команда добавления нового сообщения
    addMessage: () => {
      dispatch(addMessageAC());
      dispatch(syncingMessageAC(""));
    },
    //Команда передачи текста из textarea в state
    syncing: (text) => {
      dispatch(syncingMessageAC(text));
    },
  };
};
//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту CreateNewMessage
const CreateNewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewMessage);

export default CreateNewMessageContainer;
