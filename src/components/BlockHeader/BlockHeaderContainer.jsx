import BlockHeader from "./BlockHeader";
import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthData } from "../../redux/authReducer";

class BlockHeaderContainer extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    /* Так как у нас пустой стейт, делаем запрос на сервер */
    axios.get(`http://localhost:5000/auth`).then((response) => {
      /* И диспачем его в state через метод setUsersAC, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      this.props.setAuthData(
        response.data.userID,
        response.data.email,
        response.data.login,
        true
      );
    });
  }
  render() {
    return <BlockHeader {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  debugger;
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthData })(BlockHeaderContainer);
