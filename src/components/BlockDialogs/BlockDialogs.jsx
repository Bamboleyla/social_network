import style from "./BlockDialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import CreateNewMessage from "./Messages/CreateNewMessage/CreateNewMessage";

const BlockDialogs = (props) => {
  debugger;
  let dialogs = props.state.dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));
  let message = props.state.messageData.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>{dialogs}</div>
      <div className={style.messages}>
        {/* Компонент для добавления новых сообщений */}
        <CreateNewMessage
          dispatch={props.dispatch}
          newMessageText={props.state.newMessageText}
        />
        {message}
      </div>
    </div>
  );
};

export default BlockDialogs;
