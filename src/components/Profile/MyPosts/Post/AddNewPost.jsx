import React from 'react';
import classes from './Post.module.css';

const AddNewPost = props => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  return (
    <div className={classes.newpostform}>
      <form>
        <textarea ref={newPostElement} placeholder={props.plchldr} value={props.newPostText} onChange={onPostChange} />
        <button onClick={addPost} type='button'>
          <img src='./img/sendmessage.png' alt='alt'></img>
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
