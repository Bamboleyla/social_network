import * as axios from "axios";
import React from "react";
import style from "./BlockUsers.module.css";
import user_logo from "./user-default.jpg";
/* Создаем классовую компоненту, мы используем ее в место функциональной, что бы не нарушать принцип чистоты функции, если бы использовали функциональную */
class BlockUsers extends React.Component {
  constructor(props) {
    super(props);
    /* Так как у нас пустой стейт, делаем запрос на сервер */
    axios.get("http://localhost:5000/users").then((response) => {
      /*  И диспачем его в state через метод setUsers, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      this.props.setUsers(response.data.users);
    });
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}>
                    Followed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default BlockUsers;
