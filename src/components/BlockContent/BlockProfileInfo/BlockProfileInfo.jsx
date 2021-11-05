import style from "./BlockProfileInfo.module.css";
import React from "react";

const BlockProfileInfo = (props) => {
  let linkTextArea = React.createRef(); //Создаем обычную пустую ссылку, которую можно передать любому элементу DOM и потом получать через нее информацию о элементе
  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
    props.dispatch({ type: "SYNCING-POST", text: "" });
  };
  let syncing = () => {
    let textFromTextArea = linkTextArea.current.value;
    props.dispatch({ type: "SYNCING-POST", text: textFromTextArea });
  };
  return (
    <div>
      <div className={style.img}>
        <img src="https://raduga-shop.ru/wa-data/public/shop/products/43/95/29543/images/47374/47374.970.jpg"></img>
      </div>
      <div className={style.discription}> Ava + Discription</div>
      <div className={style.text}>
        <div>
          <textarea
            onChange={syncing}
            ref={linkTextArea}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default BlockProfileInfo;
