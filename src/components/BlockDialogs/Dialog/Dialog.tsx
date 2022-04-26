import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number;
  name: string;
};
const Dialog: React.FC<PropsType> = (props) => {
  return (
    <div className={style.item}>
      <NavLink
        to={"/dialogs/" + props.id}
        style={({ isActive }) => ({ color: isActive ? "#ffffff" : "#008000" })}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
