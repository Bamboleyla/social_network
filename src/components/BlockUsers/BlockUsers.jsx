import React from "react";
import { Paginator } from "../common/Paginator/Paginator";
import { DivUser } from "./DivUser";

const BlockUsers = (props) => {
  debugger;
  return (
    <div>
      {/* Компонента, которая отрисовывает количество страниц с данными */}
      <Paginator
        totalPages={props.totalPages}
        numberPage={props.numberPage}
        selectedPage={props.selectedPage}
      />
      {/* Компонента, которая отрисовывает карточку каждого отдельного user */}
      {props.users.map((u) => (
        <DivUser
          getUser={props.getUser}
          disabled={props.disabled}
          unfollow={props.unfollow}
          follow={props.follow}
          user={u}
        />
      ))}
    </div>
  );
};

export default BlockUsers;
