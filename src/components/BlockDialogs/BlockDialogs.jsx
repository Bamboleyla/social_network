import { NavLink } from "react-router-dom";
import style from "./BlockDialogs.module.css";

let dialogsData = [
  { id: 1, name: "Dmitriy" },
  { id: 2, name: "Luba" },
  { id: 3, name: "Gleb" },
  { id: 4, name: "Masha" },
  { id: 5, name: "Anya" },
  { id: 6, name: "Bulya" },
  { id: 7, name: "Lusya" },
  { id: 8, name: "Vitya" },
];

let messageData = [
  { id: 1, message: "Hi, have a nice day!" },
  { id: 2, message: "And good luck on your project!" },
  { id: 3, message: "React is wonderful!" },
];

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

let dialogs = dialogsData.map((d) => <Dialog id={d.id} name={d.name} />);
let message = messageData.map((m) => <Message message={m.message} />);

const BlockDialogs = (props) => {
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>{dialogs}</div>
      <div className={style.messages}>{message}</div>
    </div>
  );
};

export default BlockDialogs;
