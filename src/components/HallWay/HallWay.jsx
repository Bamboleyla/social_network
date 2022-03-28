import React, { useState } from "react";
import { LogInForm } from "../../forms/Login/LogInForm";
import style from "./HallWay.module.css";
import logo from "./social.png";

export const HallWay = (props) => {
  let [errors, setErrors] = useState(""); //Ошибки
  let [touched, setTouched] = useState(""); //Тронутые поля
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
            <LogInForm
              setErrors={setErrors}
              setTouched={setTouched}
              logIn={props.logIn}
            />
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
          {/*  если поле затронуто и есть ошибка => отобразить ошибку */}
          {(touched.login && errors.login) ||
          (touched.password && errors.password) ? (
            <div className={style.error}>
              <h4>Ошибка</h4>
              {touched.login && errors.login ? <div>{errors.login}</div> : null}
              {touched.password && errors.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
          ) : null}
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
