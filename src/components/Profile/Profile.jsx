import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <div className={classes.profileContent}>
        <MyPosts postsData={props.state.postsData} />
      </div>
    </div>
  );
};

export default Profile;
