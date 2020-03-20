import React from "react";
import classes from "./Post.module.css";

const Post = props => {
  // debugger;
  return (
    <div className={classes.item}>
      <h3>{props.header}</h3>
      <small>Date: {props.date}</small>
      {props.postimg ? <img src={props.postimg} alt="alt" /> : null}
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
