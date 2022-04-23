import { NavLink } from "react-router-dom";
import style from "./BlockNavigation.module.css";

const BlockNavigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/home" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/home/dialogs" activeClassName={style.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/home/news" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/home/music" activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/home/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/home/users" activeClassName={style.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default BlockNavigation;
