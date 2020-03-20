import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPost from './Post/AddNewPost';

const MyPosts = props => {
  let postsElements = props.postsData.map(p => (
    <Post id={p.id} header={p.header} postimg={p.postimg} message={p.message} date={p.date} />
  ));

  return (
    <div className={classes.posts}>
      <h2>MyPosts</h2>
      <hr></hr>
      <AddNewPost plchldr='Добавить новый пост' addPost={props.addPost} />
      {postsElements}
    </div>
  );
};

export default MyPosts;
