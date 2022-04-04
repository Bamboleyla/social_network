import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/authReducer";
import { HallWay } from "./HallWay";

export const HallWayContainer = (props) => {
  const navigate = useNavigate();
  return <HallWay navigate={navigate} logIn={logIn} />;
};
