import React from "react";
import classes from "./Post.module.css";

const AddNewPost = props => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div className={classes.newpostform}>
      <form>
        <textarea ref={newPostElement} placeholder={props.plchldr}></textarea>
        <button onClick={addPost} type="button">
          <img src="./img/sendmessage.png" alt="alt"></img>
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
