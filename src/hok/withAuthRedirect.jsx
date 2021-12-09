import { Redirect } from "react-router";
import React from "react";
import { connect } from "react-redux";

//Создаем функцию которая будет принимать через connect нужную часть state касаемую авторизации
let mapStateToPropsForRedirect = (state) => {
  return {
    //состояние Авторизации
    isAuth: state.auth.isAuth,
  };
};
//Добавляем в каждую компоненту проверку на ауинтификацию
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
  let result = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return result;
};
