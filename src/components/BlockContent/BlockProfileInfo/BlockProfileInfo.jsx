import style from "./BlockProfileInfo.module.css";
import React from "react";

const BlockProfileInfo = (props) => {
  /* Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе */
  let linkTextArea = React.createRef();

  let sendText = () => {
    /* Получаем значение который ввел пользователь в textarea */
    let textFromTextArea = linkTextArea.current.value;
    props.syncing(textFromTextArea);
  };

  let sendPost = () => {
    props.addPost();
  };

  return (
    <div>
      <div className={style.img}>
        <img
          src="https://raduga-shop.ru/wa-data/public/shop/products/43/95/29543/images/47374/47374.970.jpg"
          alt="my_photo"></img>
      </div>
      <div className={style.discription}> Ava + Discription</div>
      <div className={style.text}>
        <div>
          <textarea
            onChange={sendText}
            ref={linkTextArea}
            value={props.newPostText}
            placeholder="Введите ваше сообщение"
          />
        </div>
        <div>
          <button onClick={sendPost}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default BlockProfileInfo;
