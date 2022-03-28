import style from "./LogInForm.module.css";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  login: "",
  password: "",
  rememberMe: false,
};

const EmailAdress = ["test@gmail.com"];

const validationShema = Yup.object({
  login: Yup.string()
    .email("Не корректный email")
    .notOneOf(EmailAdress, "данный email уже занят")
    .lowercase("почта не может содержать в себе заглавные буквы")
    .strict()
    .required("Поле login не может быть пустым"),
  password: Yup.string()
    .min(8, "пароль не может быль короче 8 символов")
    .required("Поле password не может быть пустым"),
});

export const LogInForm = (props) => {
  const onSubmit = (values) => {
    props.logIn(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationShema}
        onSubmit={onSubmit}>
        {(formik) => {
          props.setErrors(formik.errors);
          props.setTouched(formik.touched);
          return (
            <Form>
              <div className={style.FieldBlock}>
                <div className={style.titleImput}>
                  <div className={style.text}>Email</div>
                  <Field placeholder={"   Login"} name="login" type="text" />
                </div>
                <div className={style.titleImput}>
                  <div className={style.text}>Password</div>
                  <Field
                    placeholder={"   Password"}
                    name="password"
                    type="text"
                  />
                </div>
              </div>
              <div className={style.remember}>
                <Field type="checkbox" name="rememberMe" />
                <div>remember me</div>
              </div>
              <div className={style.button}>
                <button type="submit">Login</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
