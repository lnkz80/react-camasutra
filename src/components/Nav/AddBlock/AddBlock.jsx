import React from 'react';
import classes from './AddBlock.module.css';

// const usrItemAddBlock = () => {
//   return (
//     <div>
//       <img src='./img/usr_avatar.jpg' />
//       <span>Name</span>
//     </div>
//   );
// };

const AddBlock = props => {
  return (
    <div className={classes.box}>
      <h5>{props.head}</h5>
      <div className={classes.usrItem}>
        <img src='./img/usr_avatar.jpg' />
        <span>Name</span>
      </div>
      <div className={classes.usrItem}>
        <img src='./img/usr_avatar.jpg' />
        <span>Name</span>
      </div>
      <div className={classes.usrItem}>
        <img src='./img/usr_avatar.jpg' />
        <span>Name</span>
      </div>
      <div className={classes.usrItem}>
        <img src='./img/usr_avatar.jpg' />
        <span>Name</span>
      </div>
    </div>
  );
};

export default AddBlock;
