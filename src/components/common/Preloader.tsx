import loader from "./loader.gif";
import style from "./Preloader.module.css";

const Preloader = () => {
  return <img src={loader} alt="preloader" className={style.logo} />;
};

export default Preloader;
