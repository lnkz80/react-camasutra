import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Post.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/state";

const AddNewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.newpostform}>
      <form>
        <textarea
          ref={newPostElement}
          placeholder={props.plchldr}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button onClick={addPost} type="button">
          <FontAwesomeIcon icon={faEnvelope} size="3x" color="#ffffff" />
          {/* <img src='./img/sendmessage.png' alt='alt'></img> */}
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
