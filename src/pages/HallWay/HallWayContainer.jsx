import { logIn } from "../../redux/authReducer";
import { HallWay } from "./HallWay";

export const HallWayContainer = (props) => {
  return <HallWay navigate={props.navigate} logIn={logIn} />;
};
