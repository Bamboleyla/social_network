import BlockPosts from "./BlockPosts/BlockPosts";
import BlockProfileInfo from "./BlockProfileInfo/BlockProfileInfo";

const BlockContent = (props) => {
  debugger;
  return (
    <div>
      <BlockProfileInfo
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
      <BlockPosts commentsData={props.state.commentsData} />
    </div>
  );
};

export default BlockContent;
