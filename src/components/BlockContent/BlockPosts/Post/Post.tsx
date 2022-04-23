/* Здесь находится модель-шаблон поста */
import style from "./Post.module.css";

type propsType = {
  message: string;
  likesCount: string;
};
const Post: React.FC<propsType> = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
        alt="default_user_photo"></img>
      <span className={style.message}>{props.message}</span>
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
