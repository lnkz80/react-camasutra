import React from "react";
import classes from "./Post.module.css";

const AddNewPost = props => {
  let addPost = () => {
    alert("Hello!");
  };

  return (
    <div className={classes.newpostform}>
      <form>
        <textarea placeholder={props.plchldr}></textarea>
        <button onClick={addPost} type="submit">
          <img src="./img/sendmessage.png"></img>
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
