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
//добавляем redirect если пользователь не авторизован
export default BlockContent;
