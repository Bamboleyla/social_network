import React from "react";
import style from "./BlockUser.module.css";

export const BlockUser =(props)=>{
    return <div className={style.wrapper}>
        <img src=''alt=''></img>
        <div>{props.login}</div>
    </div>
}
