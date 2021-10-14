/* Здесь находится модель-шаблон поста */
import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.item}>
      <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"></img>
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
