import React from "react";
import style from "./Paginator.module.css";

/* Компонента, которая отрисовывает количество страниц с данными */
export const Paginator = (props) => {
  //Сколько кнопок со страницами нужно вывести?
  let howMuchpages = () => {
    let result = [];
    for (let i = 1; i <= props.totalPages; i++) {
      result.push(i);
    }
    return result;
  };
  let pages = howMuchpages();
  return (
    <div className={style.numberPage}>
      {pages.map((p) => (
        <span
          className={props.numberPage === p && style.selected}
          onClick={() => {
            props.selectedPage(p);
          }}>
          {p}
        </span>
      ))}
    </div>
  );
};
