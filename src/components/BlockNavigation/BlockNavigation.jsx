import { NavLink } from "react-router-dom";
import style from "./BlockNavigation.module.css";

const BlockNavigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/contents" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default BlockNavigation;
