import BlockHeader from "./BlockHeader";
import React from "react";
import { connect } from "react-redux";
import { setAuthData, getAuthData } from "../../redux/authReducer";

class BlockHeaderContainer extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    this.props.getAuthData();
  }
  render() {
    return <BlockHeader {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthData, getAuthData })(
  BlockHeaderContainer
);
