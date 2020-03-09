import React from 'react';
import classes from './Post.module.css';

const Post = props => {
  return (
    <div className={classes.item}>
      <h3>{props.header}</h3>
      <small>Date: {props.date}</small>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
