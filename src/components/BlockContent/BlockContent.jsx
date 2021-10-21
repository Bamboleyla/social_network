import BlockPosts from "./BlockPosts/BlockPosts";
import BlockProfileInfo from "./BlockProfileInfo/BlockProfileInfo";

const BlockContent = () => {
  return (
    <div>
      <BlockProfileInfo />
      <BlockPosts />
    </div>
  );
};

export default BlockContent;
