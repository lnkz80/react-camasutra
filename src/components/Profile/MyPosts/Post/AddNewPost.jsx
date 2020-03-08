import React from 'react';
import classes from './Post.module.css';

const AddNewPost = () => {
  return (
    <div className={classes.newpostform}>
      <form>
        <textarea placeholder='Добавить новый пост'></textarea>
        <button type='submit'>Добавить</button>
      </form>
    </div>
  );
};

export default AddNewPost;
