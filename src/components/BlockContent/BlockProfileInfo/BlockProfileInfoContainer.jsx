import React from "react";
import { addPostAC, syncingPostAC } from "../../../redux/postPageReducer";
import BlockProfileInfo from "./BlockProfileInfo";

/* Контейнерная компонента */
const BlockProfileInfoContainer = (props) => {
  /* Команда добавления нового поста в state */
  let addPost = () => {
    props.store.dispatch(addPostAC());
    props.store.dispatch(syncingPostAC(""));
  };

  /* Отправка текста в веденного в textarea в state  */
  let syncing = (text) => {
    props.store.dispatch(syncingPostAC(text));
  };

  return (
    <BlockProfileInfo
      addPost={addPost}
      syncing={syncing}
      newPostText={props.store.getState().postsPage.newPostText}
    />
  );
};

export default BlockProfileInfoContainer;
