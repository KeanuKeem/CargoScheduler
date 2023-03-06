//----------------------------------------------------------------------Main Header Components---------------------//

import React from "react";

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Cargo Scheduler</h1>
      <button className={classes['add-schedule']}>Add</button>
      <ul className={classes['menu-bar']}>
        <li>
          <input type="text" placeholder="Search.." />
        </li>
        <li>
          <button>Notification</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button>User</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
