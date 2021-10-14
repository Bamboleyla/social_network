/* Здесь будет находится все внутренности блока Content */
import style from "./BlockContent.module.css";
import BlockPosts from "./BlockPosts/BlockPosts";

const BlockContent = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://raduga-shop.ru/wa-data/public/shop/products/43/95/29543/images/47374/47374.970.jpg"></img>
      </div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <BlockPosts />
    </div>
  );
};

export default BlockContent;
