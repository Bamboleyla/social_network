import style from "./BlockProfileInfo.module.css";
import React from "react";
import ProfileStatus from "./ProfileStatus";

const BlockProfileInfo = (props) => {
  /* Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе */
  let linkTextArea = React.createRef();

  let sendText = () => {
    /* Получаем значение который ввел пользователь в textarea */
    let textFromTextArea = linkTextArea.current.value;
    props.syncingPostAC(textFromTextArea);
  };

  let sendPost = () => {
    props.addPostAC();
    props.syncingPostAC("");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.img}>
        <img src={props.userPhoto} alt="my_photo"></img>
      </div>
      <div className={style.status}>
        <div className={style.title}>My status today: </div>
        <ProfileStatus
          userID={props.userID}
          status={props.userStatus}
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={style.discription}> Write your new post</div>
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
