import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='./img/profile_wallpaper.jpg' className={classes.profimg} />
      </div>
      <div className={classes.usrInfo}>
        <img src='./img/usr_avatar.jpg' className={classes.usrAvatarImage} />
        <span className={classes.usrName}>
          Homer Simpson
          <div className={classes.usrDescription}>The best man in the world!!!</div>
        </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
