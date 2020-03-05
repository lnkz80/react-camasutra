import React from "react";
import classes from "./Post.module.css";

const Post = props => {
  return (
    <div className={classes.item}>
      <h3>Post {props.id}</h3>
      <small>User: {props.user}</small>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
