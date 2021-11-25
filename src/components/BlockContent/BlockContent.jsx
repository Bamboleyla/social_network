import BlockPostsContainer from "./BlockPosts/BlockPostsContainer";
import BlockProfileInfoContainer from "./BlockProfileInfo/BlockProfileInfoContainer";

const BlockContent = () => {
  return (
    <div>
      <BlockProfileInfoContainer />
      <BlockPostsContainer />
    </div>
  );
};

export default BlockContent;
