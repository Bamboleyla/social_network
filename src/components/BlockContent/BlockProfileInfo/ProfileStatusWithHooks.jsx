import React, { useState } from "react";
import style from "./ProfileStatus.module.css";

export const ProfileStatusWithHooks = (props) => {
//Использование хука useState
let [editMode,setEditMode]=useState(false);
let [status,setStatus]=useState(props.status);

const activatedEditMode = () =>{
  setEditMode(true);
}
const deactivatedEditMode = () => {
  setEditMode(false);
  debugger;
  props.updateStatus(props.userID, status);
};

const onStatusChange = (e) => {
  setStatus(e.currentTarget.value);
};

  return (
    <div className={style.status}>
      {!editMode&& <div>
        <span onDoubleClick={activatedEditMode}>
          {props.status}
        </span>
      </div>}

      {editMode &&
        <div>
          <input
            autoFocus={true}
            onBlur={deactivatedEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      }
    </div>
  );
};
