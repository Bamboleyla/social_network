import style from "./BlockHeader.module.css";
import logo from "./img_header.png";
import { NavLink } from "react-router-dom";

const BlockHeader = (props) => {
  return (
    <header className={style.header}>
      <div className={style.user}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
      </div>
      <img src={logo} alt="rocket"></img>
    </header>
  );
};

export default BlockHeader;
