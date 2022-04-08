import style from "./LogInForm.module.css";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  login: "",
  password: "",
  rememberMe: false,
};

const validationShema = Yup.object({
  login: Yup.string()
    .email("*Не корректный email")
    .lowercase("*Почта не может содержать в себе заглавные буквы")
    .strict()
    .required("*Поле login не может быть пустым"),
  password: Yup.string()
    .min(8, "*Пароль не может быль короче 8 символов")
    .required("*Поле password не может быть пустым"),
});

const ErrorsForm = (props) => {
  return (
    <div className={style.error}>
      <h4>Ошибка!</h4>
      {props.touched.login && props.errors.login ? (
        <div>{props.errors.login}</div>
      ) : null}
      {props.touched.password && props.errors.password ? (
        <div>{props.errors.password}</div>
      ) : null}
      <div>{props.statusLogin ? props.statusLogin : null}</div>
    </div>
  );
};

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
              {/*  если поле затронуто и есть ошибка => отобразить ошибку */}
              {(formik.touched.login && formik.errors.login) ||
              (formik.touched.password && formik.errors.password) ||
              props.statusLogin ? (
                <ErrorsForm
                  errors={formik.errors}
                  touched={formik.touched}
                  statusLogin={props.statusLogin}
                />
              ) : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
