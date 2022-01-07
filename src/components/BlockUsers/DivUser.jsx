import React from "react";
import style from "./DivUser.module.css";
import user_logo from "./user-default.jpg";
import { NavLink } from "react-router-dom";

export const DivUser = (props) => {
  return (
    <div key={props.user.id} className={style.user}>
      <span>
        <div
          onClick={() => {
            props.getUser(props.user.id);
          }}>
          <NavLink to={"/contents/" + props.user.id}>
            <img
              className={style.photo}
              src={props.user.ava != null ? props.user.ava : user_logo}
              alt="user_photo"></img>
          </NavLink>
        </div>
        <div>
          {props.user.followed ? (
            <button
              disabled={props.disabled.some((id) => id === props.user.id)}
              onClick={() => {
                props.unfollow(props.user.id);
              }}>
              Followed
            </button>
          ) : (
            <button
              disabled={props.disabled.some((id) => id === props.user.id)}
              onClick={() => {
                props.follow(props.user.id);
              }}>
              Unfollowed
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>name: {props.user.fullName}</div>
          <div>status: "{props.user.status}"</div>
        </span>
        <span>
          <div>country: {props.user.location.country}</div>
          <div>sity: {props.user.location.sity}</div>
        </span>
      </span>
    </div>
  );
};
