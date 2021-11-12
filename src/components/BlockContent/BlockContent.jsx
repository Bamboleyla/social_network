import BlockPosts from "./BlockPosts/BlockPosts";
import BlockProfileInfoContainer from "./BlockProfileInfo/BlockProfileInfoContainer";

const BlockContent = (props) => {
  debugger;
  let state = props.store.getState().postsPage;

  return (
    <div>
      <BlockProfileInfoContainer store={props.store} />
      <BlockPosts commentsData={state.commentsData} />
    </div>
  );
};

export default BlockContent;
