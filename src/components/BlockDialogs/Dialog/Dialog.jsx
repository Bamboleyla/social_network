import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={style.item}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
