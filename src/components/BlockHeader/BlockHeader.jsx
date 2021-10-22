import style from "./BlockHeader.module.css";
import logo from "./img_header.png";

const BlockHeader = () => {
  return (
    <header className={style.header}>
      <img src={logo}></img>
    </header>
  );
};

export default BlockHeader;
