import React from "react";

const CreateNewMessage = (props) => {
  let linkTextArea = React.createRef(); //Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе
  let addNewMessage = () => {
    props.addMessage();
  };

  let sendNewTextMessage = () => {
    let textFromTextArea = linkTextArea.current.value;
    props.syncing(textFromTextArea);
  };

  return (
    <div>
      <div>
        <textarea
          ref={linkTextArea}
          onChange={sendNewTextMessage}
          value={props.newMessageText}
          placeholder="Введите ваше сообщение"></textarea>
      </div>
      <div>
        <button onClick={addNewMessage}>Send</button>
      </div>
    </div>
  );
};

export default CreateNewMessage;
