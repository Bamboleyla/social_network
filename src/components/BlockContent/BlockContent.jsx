import BlockPosts from "./BlockPosts/BlockPosts";
import BlockProfileInfo from "./BlockProfileInfo/BlockProfileInfo";

const BlockContent = (props) => {
  return (
    <div>
      <BlockProfileInfo
        addPost={props.addPost}
        newPostText={props.state.newPostText}
        syncingPost={props.syncingPost}
      />
      <BlockPosts commentsData={props.state.commentsData} />
    </div>
  );
};

export default BlockContent;
