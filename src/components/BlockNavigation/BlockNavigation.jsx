/* Здесь будет находится все внутренности блока Navigation */
import style from "./BlockNavigation.module.css";

const BlockNavigation = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="/contents">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default BlockNavigation;
