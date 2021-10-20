import { NavLink } from "react-router-dom";
import style from "./BlockDialogs.module.css";
const BlockDialogs = (props) => {
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>
        <div className={style.item}>
          <NavLink to="/dialogs/1" activeClassName={style.active}>
            Dmitriy
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/2" activeClassName={style.active}>
            Luba
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/3" activeClassName={style.active}>
            Gleb
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/4" activeClassName={style.active}>
            Masha
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/5" activeClassName={style.active}>
            Anya
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/6" activeClassName={style.active}>
            Bulya
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/7" activeClassName={style.active}>
            Victor
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs/8" activeClassName={style.active}>
            Lusya
          </NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi, have a nice day!</div>
        <div className={style.message}>And good luck on your project!</div>
        <div className={style.message}>React is wonderful!</div>
      </div>
    </div>
  );
};

export default BlockDialogs;
