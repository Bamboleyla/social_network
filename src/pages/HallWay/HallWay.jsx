import React, { useEffect } from "react";
import { LogInForm } from "../../forms/Login/LogInForm";
import style from "./HallWay.module.css";
import logo from "./social.png";
import { useNavigate } from "react-router-dom";

export const HallWay = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    //После выполнения props.logIn(values) и появления ошибок автаризации props.statusLogin будет в себе нести список ошибок
    //Если авторизация пройдет успешно и ошибок не будет props.statusLogin будет иметь значение false и тогда пройдет перенаправление пользователя "./home"
    props.statusLogin === false && navigate("./home", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.statusLogin]);

  const auth = (values) => {
    props.logIn(values);
  };

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
            <LogInForm logIn={auth} statusLogin={props.statusLogin} />
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
