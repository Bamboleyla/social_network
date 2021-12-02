import React from "react";
import style from "./BlockUsers.module.css";
import user_logo from "./user-default.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
            <div
              onClick={() => {
                props.getUser(u.id);
              }}>
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
                  disabled={props.disabled.some((id) => id === u.id)}
                  onClick={() => {
                    //Делаем запрос на отмену подписки к пользователю
                    props.buttonDisabled(true, u.id);
                    axios
                      .post(
                        `http://localhost:5000/follow?id=${u.id}&status=false`
                      )
                      .then((response) => {
                        //Если ответ положительный, тогда отписуемся и в state
                        if (response.data === true) {
                          props.unfollow(u.id);
                          props.buttonDisabled(false, u.id);
                        }
                      });
                  }}>
                  Followed
                </button>
              ) : (
                <button
                  disabled={props.disabled.some((id) => id === u.id)}
                  onClick={() => {
                    //Делаем запрос на отмену подписки к пользователю
                    props.buttonDisabled(true, u.id);
                    axios
                      .post(
                        `http://localhost:5000/follow?id=${u.id}&status=true`
                      )
                      .then((response) => {
                        //Если ответ положительный, тогда отписуемся и в state
                        if (response.data === true) {
                          props.follow(u.id);
                          props.buttonDisabled(false, u.id);
                        }
                      });
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
