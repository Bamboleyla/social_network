import style from "./BlockDialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import CreateNewMessageContainer from "./Messages/CreateNewMessage/CreateNewMessageContainer";

const BlockDialogs = (props) => {
  debugger;
  let dialogs = props.dialogsPage.dialogsData.map((d) => (
    <Dialog id={d.id} key={d.id} name={d.name} />
  ));
  let message = props.dialogsPage.messageData.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>{dialogs}</div>
      <div className={style.messages}>
        {/* Компонент для добавления новых сообщений */}
        <CreateNewMessageContainer />
        {message}
      </div>
    </div>
  );
};

export default BlockDialogs;
