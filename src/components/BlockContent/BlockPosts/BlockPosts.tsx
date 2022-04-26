/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

type propsType = {
  commentsData: { id: number; message: string; likes: string }[];
};

const BlockPosts: React.FC<propsType> = (props) => {
  let comments = props.commentsData.map((m) => (
    <Post message={m.message} key={m.id} likesCount={m.likes} />
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
