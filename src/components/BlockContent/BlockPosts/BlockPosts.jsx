/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

const BlockPosts = () => {
  return (
    <div className={style.posts}>
      My posts
      <div>New post</div>
      <div>
        <Post message="Hello World!" likesCount="0" />
        <Post message="I'ts test message from props" likesCount="9" />
        <Post message="I like it" likesCount="10" />
        <Post message="Yahoo" likesCount="5" />
        <Post message="I'ts work, i'ts wonderfull" likesCount="3" />
      </div>
    </div>
  );
};

export default BlockPosts;
