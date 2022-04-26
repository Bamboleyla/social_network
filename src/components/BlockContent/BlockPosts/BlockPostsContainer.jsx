/* Здесь будет находится все посты пользователя */
import { connect } from "react-redux";
import BlockPosts from "./BlockPosts.tsx";
/*************************Контейнерная компонента*****************************/

//Создаем функцию которая будет принимать через connect нужную часть state
let mapStateToProps = (state) => {
  return {
    commentsData: state.postsPage.commentsData,
  };
};
//Создаем функцию которая будет принимать через connect необходимые dispatch из store, но так как нам не чего не нужно пока, поставим просто заглушку
let mapDispatchToProps = () => {
  return {};
};

//Создаем контейнерную компоненту,подключаем наши команды к state и dispatch, оборачиваем ей презентационную компоненту BlockPosts
const BlockPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockPosts);

export default BlockPostsContainer;
