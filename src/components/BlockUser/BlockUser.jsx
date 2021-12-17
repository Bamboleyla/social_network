import React from "react";
import style from "./BlockUser.module.css";

export const BlockUser = (props) => {
  return (
    <div className={style.wrapper}>
      <img src={props.ava} alt="userPhoto"></img>
      <div className={style.login}>{props.login}</div>
    </div>
  );
};
