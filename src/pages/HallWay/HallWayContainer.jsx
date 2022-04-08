import { connect } from "react-redux";
import { logIn } from "../../redux/authReducer";
import { HallWay } from "./HallWay";

let mapStateToProps = (state) => {
  return {
    statusLogin: state.auth.errors,
  };
};

export const HallWayContainer = connect(mapStateToProps, { logIn })(HallWay);
