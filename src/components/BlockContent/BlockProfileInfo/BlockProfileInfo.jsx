import style from "./BlockProfileInfo.module.css";
import React from "react";
import ProfileStatus from "./ProfileStatus";
import { Field, reduxForm } from "redux-form";

const BlockProfileInfo = (props) => {
  let sendPost = (values) => {
    props.addPostAC(values.newPostText);
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
        <AddPostFormRedux onSubmit={sendPost} />
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Введите текст поста"
        />
      </div>
      <div>
        <button>Добавить пост</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default BlockProfileInfo;
