import { connect } from "react-redux";
import { logIn } from "../../redux/authReducer";
import { HallWay } from "./HallWay";

/*************************Контейнерная компонента*****************************/

export const HallWayContainer = connect(null, { logIn })(HallWay);
