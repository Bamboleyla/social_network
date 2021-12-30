import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./LoginPage.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberme"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const LoginPage = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm />
    </div>
  );
};

export default LoginPage;
