import React from 'react';
import classes from './Post.module.css';

const AddNewPost = props => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={classes.newpostform}>
      <form>
        <textarea ref={newPostElement} placeholder={props.plchldr}></textarea>
        <button onClick={addPost} type='submit'>
          <img src='./img/sendmessage.png'></img>
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
