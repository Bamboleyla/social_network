import style from "./LogInForm.module.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//Инициализационное значение полей формы
const initialValues = {
  login: null,
  password: null,
  rememberMe: false,
};
//Обработчик события
const onSubmit = (values) => {
  debugger;
  console.log("Form values", values);
};
//Список уже с занятыми адресами электронной почты
const EmailAdress = ["test@gmail.com"];
//Создаю схему валидации полей формы
const validationShema = Yup.object({
  //Для поля login
  login: Yup
    //Проверка что вводимый тип данных это строка
    .string()
    //Проверка на формат почты
    .email("Не корректный email")
    .notOneOf(EmailAdress, "данный email уже занят")
    //Проверка на наличие заглавных букв
    .lowercase("почта не может содержать в себе заглавные буквы")
    .strict()
    //Проверка на пустое поле
    .required("Поле не может быть пустым"),
  //Для поля password
  password: Yup
    //Проверка что вводимый тип данных это строка
    .string()
    //Проверка на минимальную длинну строки
    .min(8, "пароль не может быль короче 8 символов")
    //Проверка на пустое поле
    .required("Поле не может быть пустым"),
});

/******************* Форма Логанизации *******************************/
export const LogInForm = (props) => {
  //props.setErrors(formik.errors);
  //props.setTouched(formik.touched);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationShema}
        onSubmit={onSubmit}>
        <Form>
          <div className={style.FieldBlock}>
            <div className={style.titleImput}>
              <div className={style.text}>Email</div>
              <Field placeholder={"   Login"} name="login" type="text" />
              <ErrorMessage name="login" />
            </div>
            <div className={style.titleImput}>
              <div className={style.text}>Password</div>
              <Field
                placeholder={"   Password"}
                name="password"
                type="password"
              />
              <ErrorMessage name="password" />
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
      </Formik>
    </div>
  );
};
