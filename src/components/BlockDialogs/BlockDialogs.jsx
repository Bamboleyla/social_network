import style from "./BlockDialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

const BlockDialogs = (props) => {
  let dialogs = props.dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));
  let message = props.messageData.map((m) => <Message message={m.message} />);
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>{dialogs}</div>
      <div className={style.messages}>{message}</div>
    </div>
  );
};

export default BlockDialogs;
