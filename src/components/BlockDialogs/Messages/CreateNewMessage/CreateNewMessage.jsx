import React from "react";

const CteateNewMessage = (props) => {
  debugger;
  let linkTextArea = React.createRef(); //Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе
  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
    props.dispatch({ type: "SYNCING-MESSAGE", text: "" });
  };

  let syncing = () => {
    let textFromTextArea = linkTextArea.current.value;
    props.dispatch({ type: "SYNCING-MESSAGE", text: textFromTextArea });
  };
  return (
    <div>
      <div>
        <textarea
          ref={linkTextArea}
          onChange={syncing}
          value={props.newMessageText}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default CteateNewMessage;
