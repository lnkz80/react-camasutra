import React from 'react';
import classes from './Post.module.css';

const Post = props => {
  return (
    <div className={classes.item}>
      <h3>{props.header}</h3>
      <small>Date: {props.date}</small>
      {props.postimg ? <img src={props.postimg} /> : null}
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
