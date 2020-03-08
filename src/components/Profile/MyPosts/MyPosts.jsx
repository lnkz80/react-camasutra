import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPost from './Post/AddNewPost';

const MyPosts = props => {
  let postsElements = props.postsData.map(p => <Post id={p.id} message={p.message} user={p.user} />);

  return (
    <div className={classes.posts}>
      <h2>MyPosts</h2>
      <hr></hr>
      <AddNewPost />
      {postsElements}
    </div>
  );
};

export default MyPosts;
