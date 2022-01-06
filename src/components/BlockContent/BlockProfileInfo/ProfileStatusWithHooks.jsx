import React, { useState, useEffect } from "react";
import style from "./ProfileStatus.module.css";

export const ProfileStatusWithHooks = (props) => {
//Использование хука useState
let [editMode,setEditMode]=useState(false);
let [status,setStatus]=useState(props.status);

//Использование хука useState
useEffect(()=>{
  setStatus(props.status);
},[props.status]);

const activatedEditMode = () =>{
  setEditMode(true);
}
const deactivatedEditMode = () => {
  setEditMode(false);
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
