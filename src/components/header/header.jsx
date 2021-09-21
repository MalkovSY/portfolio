import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../UI/buttons/header/headerBtn';

import classes from './header.module.css';
// import '../../index.css';

const Header = ({leng, enLeng}) => {
  return (
      <nav className={classes.header__menu}>
        <ul className={classes.header__menu_list}>
          <li className={classes.header__list_item}>
            <HeaderBtn className='test' paddingLeft='0'>
            {enLeng ? leng[0].home : leng[1].home}
            </HeaderBtn>
          </li>
          <li className={classes.header__list_item}>
            <HeaderBtn>
            {enLeng ? leng[0].about : leng[1].about}
            </HeaderBtn>
          </li>
          <li className={classes.header__list_item}>
            <HeaderBtn>
            {enLeng ? leng[0].skills : leng[1].skills}
            </HeaderBtn>
          </li>
          <li className={classes.header__list_item}>
            <HeaderBtn>
            {enLeng ? leng[0].portfolio : leng[1].portfolio}
            </HeaderBtn>
          </li>
          <li className={classes.header__list_item}>
            <HeaderBtn paddingRight='0'>
            {enLeng ? leng[0].contacts : leng[1].contacts}
            </HeaderBtn>
          </li>
        </ul>
      </nav>
  );
};

export default Header;