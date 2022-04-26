import { usersType } from "../../redux/usersPageReducer";
import { Paginator } from "../common/Paginator/Paginator";
import { DivUser } from "./DivUser";

type PropsType = {
  numberPage: number;
  getUser: (num: number) => void;
  totalPages: number;
  users: usersType[];
  unfollow: (num: number) => void;
  follow: (num: number) => void;
  disabled: Array<number>;
  selectedPage: (num: number) => void;
};
const BlockUsers: React.FC<PropsType> = (props) => {
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
