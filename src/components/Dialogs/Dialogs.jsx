import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { NavLink } from "react-router-dom";

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} active={d.act} />
  ));

  let messagesElements = props.state.messagesData.map(m => (
    <Message message={m.mess} usr={m.usr} avatar={m.avatar} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messbox}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
