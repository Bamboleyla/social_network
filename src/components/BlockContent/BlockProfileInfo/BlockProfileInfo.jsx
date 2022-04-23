import style from "./BlockProfileInfo.module.css";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../ulils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControl";
//Так как maxLengthCreator10 это валидаторкриэйтор, его нельзя передать напрямую в Field, он просто не будет работать, его одязательно нужно обозначить за пределами компоненты
const maxLengthCreator10 = maxLengthCreator(10);

const BlockProfileInfo = (props) => {
  /* Обработчик события onSubmit формы AddPostFormRedux, который полученное значение values из формы задиспатчит в state */
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
        {/* Используем форму AddPostFormRedux из redux-form, вешаем обработчик sendPost на событие формы onSubmit*/}
        <AddPostFormRedux onSubmit={sendPost} />
      </div>
    </div>
  );
};
//Создаем форму
const AddNewPostForm = (props) => {
  return (
    /* Используем для создании формы только тег form */
    /*  Вешаем обработчик handleSubmit на событие формы onSubmit */
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* Используем контейнерную компоненту Field вместо imput, texarea, label, указываем ей что нужно отрисовать component={Textarea}, даем ей уникальное имя
        name="newPostText" в state, вещаем валидатор validate={[required, maxLengthCreator10]} */}
        <Field
          /* В отрисовке компоненты будет использоватся наша кастомная компонента Textarea, описание которой мы сами создали в formsControl.js */
          component={Textarea}
          //Присваиваем Field уникальное имя name="newPostText"
          name="newPostText"
          //При необходимости можем ему назначить placeholder="Введите текст поста"
          placeholder="Введите текст поста"
          //устанавливаем валидаторы
          validate={[required, maxLengthCreator10]}
        />
      </div>
      <div>
        {/* добавляем текст на кнопку */}
        <button>Добавить пост</button>
      </div>
    </form>
  );
};
//Присваиваем уникальное имя form: "ProfileAddNewPostForm" для формы AddNewPostForm в state
const AddPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default BlockProfileInfo;
