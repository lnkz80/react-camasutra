import React from "react";
import classes from "../Dialogs.module.css";

const AddNewMessage = props => {
  return (
    <div className={classes.newpostform}>
      <form>
        <textarea placeholder={props.plchldr}></textarea>
        <button
          onClick={() => {
            alert("Hello!");
          }}
          type="submit">
          <img src="./img/sendmessage.png"></img>
        </button>
      </form>
    </div>
  );
};

export default AddNewMessage;
