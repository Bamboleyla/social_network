import BlockPosts from "./BlockPosts/BlockPosts";
import BlockProfileInfo from "./BlockProfileInfo/BlockProfileInfo";

const BlockContent = (props) => {
  return (
    <div>
      <BlockProfileInfo />
      <BlockPosts commentsData={props.state.commentsData} />
    </div>
  );
};

export default BlockContent;
