import style from "./BlockProfileInfo.module.css";
import React from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../ulils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControl";

const maxLengthCreator10 = maxLengthCreator(10);

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
        <ProfileStatusWithHooks
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
          component={Textarea}
          name="newPostText"
          placeholder="Введите текст поста"
          validate={[required, maxLengthCreator10]}
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
