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

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
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

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default CreateNewMessage;
