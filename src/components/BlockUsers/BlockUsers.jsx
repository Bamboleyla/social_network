import * as axios from "axios";
import React from "react";
import style from "./BlockUsers.module.css";
import user_logo from "./user-default.jpg";
/* Создаем классовую компоненту, мы используем ее в место функциональной, что бы не нарушать принцип чистоты функции, если бы использовали функциональную */
class BlockUsers extends React.Component {
  /* Вызываем метод жизненного цикла компонента */
  componentDidMount() {
    /* Так как у нас пустой стейт, делаем запрос на сервер */
    axios
      .get(`http://localhost:5000/users?page=${this.props.numberPage}`)
      .then((response) => {
        /* И диспачем его в state через метод setUsers, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
        this.props.setUsers(response.data.users);
        this.props.setTotalPages(response.data.totalPages);
      });
  }
  //Обработчик выбраной страницы
  selectedPage = (num) => {
    this.props.setNumberPage(num);
    axios.get(`http://localhost:5000/users?page=${num}`).then((response) => {
      /* И диспачем его в state через метод setUsers, обратите внимание на this так как любая классовая компонента это объект и обращение к props совершенно другой */
      this.props.setUsers(response.data.users);
    });
  };
  /* Вызываем метод, который вернет разметку JSX */
  render() {
    //Сколько кнопок со страницами нужно вывести?
    let howMuchpages = () => {
      let result = [];
      for (let i = 1; i <= this.props.totalPages; i++) {
        result.push(i);
      }
      return result;
    };

    let pages = howMuchpages();
    debugger;
    return (
      <div>
        <div>
          {pages.map((p) => (
            <span
              className={this.props.numberPage === p && style.selected}
              onClick={() => {
                this.selectedPage(p);
              }}>
              {p}
            </span>
          ))}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={style.photo}
                  src={u.ava != null ? u.ava : user_logo}
                  alt="user_photo"></img>
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
