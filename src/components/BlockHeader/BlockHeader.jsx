import style from "./BlockHeader.module.css";
import logo from "./img_header.png";
import { NavLink } from "react-router-dom";
import { BlockUser } from "../BlockUser/BlockUser.tsx";

const BlockHeader = (props) => {
  return (
    <header className={style.header}>
      {props.isAuth ? (
        <BlockUser login={props.login} ava={props.img} />
      ) : (
        <NavLink to={"/login"}>login</NavLink>
      )}
      <img src={logo} alt="rocket"></img>
    </header>
  );
};

export default BlockHeader;
