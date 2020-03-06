import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import AddBlock from './AddBlock/AddBlock';

const Nav = props => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </div>
      <div>
        <AddBlock head='Friends' usrs={props.state} />
      </div>
    </nav>
  );
};

export default Nav;
