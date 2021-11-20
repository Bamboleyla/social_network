import * as axios from "axios";
import React from "react";
import style from "./BlockUsers.module.css";
import user_logo from "./user-default.jpg";

const BlockUsers = (props) => {
  if (props.users.length === 0) {
    axios.get("http://localhost:5000/users").then((response) => {
      debugger;
      props.setUsers(response.data.users);
    });

    /* props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Дима",
        status: "I want to become a web developer",
        location: { country: "Russia", sity: "Ufa" },
        ava: "https://znamenitka.ru/uploads/posts/2019-11/dmitriy-shepelev-pokazal-podpischikam-poceluy-s-ekaterinoy-tulupovoy-1.jpg",
      },
    ]); */
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={style.photo}
                src={u.ava != null ? u.ava : user_logo}></img>
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
