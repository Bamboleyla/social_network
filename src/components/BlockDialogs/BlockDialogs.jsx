import style from "./BlockDialogs.module.css";
const BlockDialogs = (props) => {
  return (
    <div className={style.blockDialogs}>
      <div className={style.dialogs}>
        <div className={style.item + " " + style.active}>Dmitriy</div>
        <div className={style.item}>Luba</div>
        <div className={style.item}>Gleb</div>
        <div className={style.item}>Masha</div>
        <div className={style.item}>Anya</div>
        <div className={style.item}>Bulya</div>
        <div className={style.item}>Victor</div>
        <div className={style.item}>Lusya</div>
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
