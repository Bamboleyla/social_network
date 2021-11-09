import React from "react";
import {
  addMessageAC,
  syncingMessageAC,
} from "../../../../redux/dialogsPageReducer";

const CteateNewMessage = (props) => {
  let linkTextArea = React.createRef(); //Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе
  let addMessage = () => {
    props.dispatch(addMessageAC());
    props.dispatch(syncingMessageAC(""));
  };

  let syncing = () => {
    let textFromTextArea = linkTextArea.current.value;
    props.dispatch(syncingMessageAC(textFromTextArea));
  };

  return (
    <div>
      <div>
        <textarea
          ref={linkTextArea}
          onChange={syncing}
          value={props.newMessageText}
          placeholder="Введите ваше сообщение"></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default CteateNewMessage;
