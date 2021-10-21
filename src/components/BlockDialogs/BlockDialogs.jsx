import { NavLink } from "react-router-dom";
import style from "./BlockDialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={style.item}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const BlockDialogs = (props) => {
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>
        <Dialog id="1" name="Dmitriy" />
        <Dialog id="2" name="Luba" />
        <Dialog id="3" name="Gleb" />
        <Dialog id="4" name="Masha" />
        <Dialog id="5" name="Anna" />
        <Dialog id="6" name="Bulya" />
        <Dialog id="7" name="Victor" />
        <Dialog id="8" name="Lusya" />
      </div>
      <div className={style.messages}>
        <Message message="Hi, have a nice day!" />
        <Message message="And good luck on your project!" />
        <Message message="React is wonderful!" />
      </div>
    </div>
  );
};

export default BlockDialogs;
