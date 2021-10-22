import style from "./BlockProfileInfo.module.css";

const BlockProfileInfo = () => {
  return (
    <div>
      <div className={style.img}>
        <img src="https://raduga-shop.ru/wa-data/public/shop/products/43/95/29543/images/47374/47374.970.jpg"></img>
      </div>
      <div className={style.discription}> Ava + Discription</div>
      <div className={style.text}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default BlockProfileInfo;
