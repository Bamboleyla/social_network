import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../../ulils/validators/validators";
import { Textarea } from "../../../common/formsControls/formsControl";

const maxLengthCreator100 = maxLengthCreator(100);

const CreateNewMessage = (props) => {
  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  return (
    <div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
//Создаем форму
const AddMessageForm = (props) => {
  return (
    /* Используем для создании формы только тег form */
    /*  Вешаем обработчик handleSubmit на событие формы onSubmit */
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* Используем контейнерную компоненту Field вместо imput, texarea, label, указываем ей что нужно отрисовать component={Textarea}, даем ей уникальное имя
        name="newMessageBody" в state, вещаем валидатор validate={[required, maxLengthCreator100]} */}
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Введите ваше сообщение"
          validate={[required, maxLengthCreator100]}
        />
      </div>
      <div>
        <button>Отправить сообщение</button>
      </div>
    </form>
  );
};
//Присваиваем уникальное имя form: "dialogAddMessageForm" для формы AddMessageForm в state
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default CreateNewMessage;
