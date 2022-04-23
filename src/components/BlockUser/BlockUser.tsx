import style from "./BlockUser.module.css";
type propsType = {
  ava: string;
  login: string;
};
export const BlockUser: React.FC<propsType> = (props) => {
  return (
    <div className={style.wrapper}>
      <img src={props.ava} alt="userPhoto"></img>
      <div className={style.login}>{props.login}</div>
    </div>
  );
};
