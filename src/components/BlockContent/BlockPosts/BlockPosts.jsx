/* Здесь будет находится все посты пользователя */
import style from "./BlockPosts.module.css";
import Post from "./Post/Post";

let CommentsData = [
  { id: 1, message: "Hello World!", likes: "0" },
  { id: 2, message: "I'ts test message from props", likes: "9" },
  { id: 3, message: "I like it", likes: "10" },
  { id: 4, message: "Yahoo", likes: "5" },
  { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
];

let Comments = CommentsData.map((m) => (
  <Post message={m.message} likesCount={m.likes} />
));

const BlockPosts = () => {
  return (
    <div className={style.posts}>
      <div className={style.title}>
        My posts
        <div>New post</div>
      </div>
      <div>{Comments}</div>
    </div>
  );
};

export default BlockPosts;
