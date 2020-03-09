import React from 'react';
import classes from './../Dialogs.module.css';

const Message = props => {
  let message;
  props.usr
    ? (message = props.message + ' ' + <img src={props.avatar} />)
    : (message = <img src={props.avatar} /> + ' ' + props.message);
  // props.usr ? (messageStyle = "true") : (messageStyle = "false");
  return (
    <div className={classes.mcontainer}>
      <div className={`${classes.message} ${props.usr ? classes.messageRight : classes.messageLeft}`}>
        {message}
        {/* {props.usr ? props.message + ' ' + <img src={props.avatar} /> : <img src={props.avatar} /> && props.message} */}
      </div>
    </div>
  );
};

export default Message;
