import React from "react";
import style from "./BlockUsers.module.css";

const BlockUsers = (props) => {
  debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Дима",
        status: "I want to become a web developer",
        location: { country: "Russia", sity: "Ufa" },
        ava: "https://znamenitka.ru/uploads/posts/2019-11/dmitriy-shepelev-pokazal-podpischikam-poceluy-s-ekaterinoy-tulupovoy-1.jpg",
      },
      {
        id: 2,
        followed: false,
        fullName: "Любовь",
        status: "I was born for love",
        location: { country: "Russia", sity: "Ufa" },
        ava: "https://img.staticdj.com/32121491cc340b5557e39ac79355113e.jpeg",
      },
      {
        id: 3,
        followed: false,
        fullName: "Глеб",
        status: "I love learning",
        location: { country: "Russia", sity: "Ufa" },
        ava: "http://glebsavchenko.com/wp-content/uploads/2017/01/BE8D791A-F662-4336-9D21-30C13B9A1F84.jpeg",
      },
      {
        id: 4,
        followed: false,
        fullName: "Маша",
        status: "I like PAW Patrol",
        location: { country: "Russia", sity: "Ufa" },
        ava: "https://cdn.shopify.com/s/files/1/0264/9063/4337/files/PAW_GTG_FW20_F_Marshall_001_flop_CGI_3dacfb87-eeea-42e8-8535-7915cb9c15b9_x1500.png?v=1592933112",
      },
      {
        id: 5,
        followed: false,
        fullName: "Аня",
        status: "Ням-ням",
        location: { country: "Russia", sity: "Ufa" },
        ava: "https://st.stranamam.ru/data/cache/2017jul/12/52/22723833_19396.jpg",
      },
      {
        id: 6,
        followed: false,
        fullName: "Буля",
        status: "I love cook",
        location: { country: "Russia", sity: "Ufa" },
        ava: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX21599283.jpg",
      },
      {
        id: 7,
        followed: false,
        fullName: "Viktor",
        status: "i am Electro-man",
        location: { country: "Russia", sity: "Ufa" },
        ava: "http://mobilka.моремаек.рф/images/shop_items/7117_500x500.png",
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={style.photo} src={u.ava}></img>
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
