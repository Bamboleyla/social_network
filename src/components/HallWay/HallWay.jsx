import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../ulils/validators/validators";
import { Input } from "../common/formsControls/formsControl.js";
import style from "./HallWay.module.css";
import logo from "./social.png";

//1 Создаем обычную форму для логанизации
/* Используем деструктуризацию , так как для олноценной работы формы, нам будет достаточно использовать часть props, а именно только callback handleSubmit
из reduxForm. Именно он будет собирать всю информацию из Field и отправлять наверх. По этому очень важно остальное скрыть, чтобы предотвратить утечку ненужной
информации, для этого используем диструктуризацию оставляя только нужное { handleSubmit } */
const Form = ({ handleSubmit }) => {
  return (
    /* для нормальной работы формы необходимо handleSubmit повесить на событие формы onSubmit */
    <form onSubmit={handleSubmit}>
      <div className={style.inputBlock}>
        <div className={style.titleImput}>
          <div className={style.text}>Email</div>
          {/*в место imput, label, textarea и т.д. используем специальную контейнерную компоненту Field из redux-form которая внутри себя отресует 
          другую компоненту и передаст ей значения в ввиде props */}
          <Field
            placeholder={"   Login"}
            /* каждый Field должен иметь название свойства name={"Login"}, под этим свойством данные будут отправляться в state или сервер */
            name={"Login"}
            /* в данном случае Field отрисует специальную компоненту component={Input} которую мы сами и напишем */
            component={Input}
            validate={[required]}
          />
        </div>
        <div className={style.titleImput}>
          <div className={style.text}>Password</div>
          <Field
            placeholder={"   Password"}
            name={"password"}
            component={Input}
            validate={[required]}
          />
        </div>
      </div>
      <div className={style.remember}>
        <Field
          component={Input}
          name={"rememberme"}
          type={"checkbox"}
          className={style.check}
          validate={[required]}
        />
        <div>remember me</div>
      </div>
      <div className={style.button}>
        <button>Login</button>
      </div>
    </form>
  );
};
//2 Обязательно оборачиваем нашу форму специальным хаком reduxForm из библиотеки redux-form, с помошью которого наша форма будет общаться с redux-form отправлять
// и получать всю необходимую информацию
const ReduxForm = reduxForm({
  //Даем уникальное имя форме, под которым она будет записана и хранится в store
  form: "HallWay",
})(Form);
//3 Создаем страницу с логанизацией
export const HallWay = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.blockLogo}>
          <div className={style.logo}>
            <div className={style.title}>
              <div className={style.styleTall}>
                <div className={style.rectangleTall}>S</div>
                <div className={style.rectangleTall}>O</div>
                <div className={style.rectangleTall}>C</div>
                <div className={style.rectangleTall}>I</div>
                <div className={style.rectangleTall}>A</div>
                <div className={style.rectangleTall}>L</div>
              </div>
              <div className={style.styleSmall}>
                <div className={style.rectangleSmall}>N</div>
                <div className={style.rectangleSmall}>E</div>
                <div className={style.rectangleSmall}>T</div>
                <div className={style.rectangleSmall}>W</div>
                <div className={style.rectangleSmall}>O</div>
                <div className={style.rectangleSmall}>R</div>
                <div className={style.rectangleSmall}>K</div>
              </div>
            </div>
            <div className={style.image}>
              <img src={logo} alt="HallWayLogo" />
            </div>
          </div>
        </div>
        <div className={style.login}>
          <div className={style.loginForm}>
            <h1>Login</h1>
            <p>Please enter the email adress and password</p>
            {/* Помещаем форму на страницу */}
            <ReduxForm />
          </div>
          <div className={style.else}>
            <div className={style.questions}>
              <div>Don`t have account ?</div>
              <div>Log in as a guest ?</div>
            </div>
            <div className={style.singUp}>
              <div>Sing up</div>
              <div>Sing up</div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.signature}>
            2021-2022 desing and work Vorobjev D.
          </div>
        </div>
      </div>
    </div>
  );
};
