import style from "./LogInForm.module.css";
import React from "react";
import { useFormik } from "formik";

const initialValues = {
  login: "",
  password: "",
  rememberMe: false,
};

const onSubmit = (values) => {
  console.log("Form values", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.login) {
    errors.login = "Поле email не может быть пустым";
  }
  console.log("Form errors", errors);
  return errors;
};

/******************* Форма Логанизации *******************************/
export const LogInForm = (props) => {
  //Импортируем useFormik который нам понадобится при создании формы
  const formik = useFormik({
    //1.Устанавливаем инициализационный state для наших полей формы
    initialValues,
    //2. устанавливаем функцию обработчик для события onSubmit
    onSubmit,
    //3.устанавливаем валидаторы для проверки корректности заполнения полей
    validate,
  });
  //console.log("Form values", formik.values);
  /* Все ошибки передаем на вверх */
  props.setErrors(formik.errors);
  props.setTouched(formik.touched);
  return (
    <div>
      {/* для получения данных введенных пользователем в форму, необходимо
      повесить handleSubmit на событие формы onSubmit */}
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputBlock}>
          <div className={style.titleImput}>
            <div className={style.text}>Email</div>
            <input
              placeholder={"   Login"}
              name="login"
              type="text"
              //добавим новое событие, которое добавляет в formik.touched информацию о тронутых пользователем полях формы
              onBlur={formik.handleBlur}
              //вешаем обработчик из formik для отслеживания изменений поля login
              onChange={formik.handleChange}
              //устанавливаем значения поля из state formic
              value={formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? (
              <div className={style.alert}> ! </div>
            ) : null}
          </div>
          <div className={style.titleImput}>
            <div className={style.text}>Password</div>
            <input
              placeholder={"   Password"}
              name="password"
              type="text"
              //В место того, что бы указывать onBlur,onChange,value для каждого поля формы, можно воспользоваться getFieldProps который делает тоже самое, лишая нас шаблонного кода
              {...formik.getFieldProps("password")}
            />
          </div>
        </div>
        <div className={style.remember}>
          <input
            type={"checkbox"}
            name="rememberMe"
            //вешаем обработчик из formik для отслеживания изменений поля login
            onChange={formik.handleChange}
            //устанавливаем значения поля из state formic
            value={formik.values.rememberMe}
          />
          <div>remember me</div>
        </div>
        <div className={style.button}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
