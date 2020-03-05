import React from "react";
import classes from "./../Dialogs.module.css";

const Message = props => {
  let messageStyle;
  props.usr
    ? (messageStyle = classes.messageRight)
    : (messageStyle = classes.messageLeft);
  // props.usr ? (messageStyle = "true") : (messageStyle = "false");
  return (
    <div className={classes.mcontainer}>
      <div className={`${classes.message} ${messageStyle}`}>
        <img src={props.avatar} /> {props.message}
      </div>
    </div>
  );
};

export default Message;
