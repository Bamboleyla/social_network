/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

const BlockPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post message="Hello World!" />
        <Post message="I'ts test message from props" />
        <Post message="I like it" />
        <Post message="Yahoo" />
        <Post message="I'ts work, i'ts wunderfull" />
      </div>
    </div>
  );
};

export default BlockPosts;
