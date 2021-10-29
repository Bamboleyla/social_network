import React from "react";

const CteateNewMessage = () => {
  let linkTextArea = React.createRef(); //Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе
  let addMessage = () => {
    let textFromTextArea = linkTextArea.current.value;
    alert(textFromTextArea);
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
