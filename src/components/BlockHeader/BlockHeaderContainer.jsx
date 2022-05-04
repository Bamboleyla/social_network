import BlockHeader from "./BlockHeader";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actions } from "../../redux/authReducer";

const BlockHeaderContainer = (props) => {
  /* Вызываем метод жизненного цикла компонента */
  useEffect(() => props.getAuthData, []);
  return <BlockHeader {...props} />;
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    img: state.auth.ava,
  };
};

export default connect(mapStateToProps, {
  setAuthData: actions.setAuthData,
  getAuthData: actions.getAuthData,
})(BlockHeaderContainer);
