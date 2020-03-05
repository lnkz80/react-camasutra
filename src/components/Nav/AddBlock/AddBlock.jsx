import React from 'react';
import classes from './AddBlock.module.css';

const BlockItem = () => {
  return (
    <div className={classes.usrItem}>
      <img src='./img/usr_avatar.jpg' />
      <span>Name</span>
    </div>
  );
};

const AddBlock = props => {
  return (
    <div className={classes.box}>
      <h5>{props.head}</h5>
      <BlockItem />
      <BlockItem />
      <BlockItem />
      <BlockItem />
      <BlockItem />
    </div>
  );
};

export default AddBlock;
