/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

const BlockPosts = (props) => {
  let comments = props.commentsData.map((m) => (
    <Post message={m.message} likesCount={m.likes} />
  ));
  return (
    <div className={style.posts}>
      <div className={style.title}>
        My posts
        <div>New post</div>
      </div>
      <div>{comments}</div>
    </div>
  );
};

export default BlockPosts;
