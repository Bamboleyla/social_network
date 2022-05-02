import { connect } from "react-redux";
import { dialogsPageReducerType } from "../../redux/dialogsPageReducer";
import { AppStateType } from "../../redux/redux-store";
import BlockDialogs from "./BlockDialogs";

/*************************Контейнерная компонента*****************************/
//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (
  state: AppStateType
): { dialogsPage: dialogsPageReducerType } => {
  return {
    //данные о диалогах
    dialogsPage: state.dialogsPage,
  };
};

//Создаем функцию которая будет принимать через connect необходимые dispatch из store, но так как нам не чего не нужно пока, поставим просто заглушку
let mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockDialogs);
