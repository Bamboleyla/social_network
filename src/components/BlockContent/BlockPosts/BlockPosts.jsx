/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

const BlockPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default BlockPosts;
