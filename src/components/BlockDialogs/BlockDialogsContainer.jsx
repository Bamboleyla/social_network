import { connect } from "react-redux";
import BlockDialogs from "./BlockDialogs";
import { withAuthRedirect } from "../../hok/withAuthRedirect";
/************************************HOK*****************************************/
//HOK который добавит в нашу компоненту проверку на аунтификацию
let redirectHOK = withAuthRedirect(BlockDialogs);
/*************************Контейнерная компонента*****************************/
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    //данные о диалогах
    dialogsPage: state.dialogsPage,
  };
};

//Создаем функцию которая будет принимать через connect необходимые dispatch из store, но так как нам не чего не нужно пока, поставим просто заглушку
let mapDispatchToProps = () => {
  return {};
};
//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту BlockDialogs
const BlockDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(redirectHOK);
export default BlockDialogsContainer;
