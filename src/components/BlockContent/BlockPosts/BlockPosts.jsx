/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

const BlockPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post message="Hello World!" likesCount="0" />
        <Post message="I'ts test message from props" likesCount="9" />
        <Post message="I like it" likesCount="10" />
        <Post message="Yahoo" likesCount="5" />
        <Post message="I'ts work, i'ts wunderfull" likesCount="3" />
      </div>
    </div>
  );
};

export default BlockPosts;