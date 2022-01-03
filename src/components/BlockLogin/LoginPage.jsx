import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../ulils/validators/validators";
import { Input } from "../common/formsControls/formsControl.js";
import style from "./LoginPage.module.css";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"Login"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"rememberme"}
          type={"checkbox"}
          validate={[required]}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "Login",
})(Form);

const Page = () => {
  return (
    <div>
      <h1></h1>
      <ReduxForm />
    </div>
  );
};

export default Page;
