import React from "react";

const CteateNewMessage = (props) => {
  let linkTextArea = React.createRef(); //Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе
  let addMessage = () => {
    let textFromTextArea = linkTextArea.current.value;
    props.addMessage(textFromTextArea);
    linkTextArea.current.value = ""; //После отправки данных зануляем textarea
  };

  return (
    <div>
      <div>
        <textarea ref={linkTextArea}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default CteateNewMessage;
