/* Здесь будет находится все внутренности блока Navigation */
import { NavLink } from "react-router-dom";
import style from "./BlockNavigation.module.css";

const BlockNavigation = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/contents" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default BlockNavigation;
