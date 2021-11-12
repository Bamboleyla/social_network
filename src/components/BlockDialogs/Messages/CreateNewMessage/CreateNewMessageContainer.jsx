import React from "react";
import {
  addMessageAC,
  syncingMessageAC,
} from "../../../../redux/dialogsPageReducer";
import CreateNewMessage from "./CreateNewMessage";

const CreateNewMessageContainer = (props) => {
  let addMessage = () => {
    props.store.dispatch(addMessageAC());
    props.store.dispatch(syncingMessageAC(""));
  };

  let syncing = (text) => {
    props.store.dispatch(syncingMessageAC(text));
  };

  let state = props.store.getState();
  debugger;
  return (
    <CreateNewMessage
      addMessage={addMessage}
      syncing={syncing}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default CreateNewMessageContainer;
