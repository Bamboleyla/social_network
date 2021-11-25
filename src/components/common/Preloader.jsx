import React from "react";
import loader from "./loader.gif";
import style from "./Preloader.module.css";

const Preloader = (props) => {
  return <img src={loader} alt="preloader" className={style.logo} />;
};

export default Preloader;
