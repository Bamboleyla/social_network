import React from "react";
import style from "./BlockUsers.module.css";
import user_logo from "./user-default.jpg";
import { NavLink } from "react-router-dom";

const BlockUsers = (props) => {
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
    <div>
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
      {props.users.map((u) => (
        <div key={u.id} className={style.user}>
          <span>
            <div>
              <NavLink to={"/contents/" + u.id}>
                <img
                  className={style.photo}
                  src={u.ava != null ? u.ava : user_logo}
                  alt="user_photo"></img>
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Followed
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Unfollowed
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.sity}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default BlockUsers;
