import React from 'react';
import classes from '../Dialogs.module.css';

const AddNewMessage = props => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateMessageText(text);
  };
  return (
    <div className={classes.newpostform}>
      <form>
        <textarea
          ref={newMessageElement}
          value={props.newMessageText}
          onChange={onMessageChange}
          placeholder={props.plchldr}
        />
        <button type='button' onClick={addMessage}>
          <img src='./img/sendmessage.png' alt='alt'></img>
        </button>
      </form>
    </div>
  );
};

export default AddNewMessage;
