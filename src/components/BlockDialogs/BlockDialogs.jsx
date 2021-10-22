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
  { id: 8, name: "Vutya" },
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

const BlockDialogs = (props) => {
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
        <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
        <Dialog id={dialogsData[4].id} name={dialogsData[4].name} />
        <Dialog id={dialogsData[5].id} name={dialogsData[5].name} />
        <Dialog id={dialogsData[6].id} name={dialogsData[6].name} />
        <Dialog id={dialogsData[7].id} name={dialogsData[7].name} />
      </div>
      <div className={style.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
      </div>
    </div>
  );
};

export default BlockDialogs;
