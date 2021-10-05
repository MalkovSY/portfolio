import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'; на данном этапе излишне, понадобится при добавлении функционала
import { Link } from "react-scroll";
import styled from 'styled-components';
import BurgerBtn from '../UI/buttons/header/burgerBtn';
import HeaderBtn from '../UI/buttons/header/headerBtn';

import classes from './header.module.css';
const MyList = styled.ul`
  display: flex;
  justify-content: space-between;
  transition: all .5s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    transform: translateY(-200%);
    background: black;
    width: 100%;
    /* height: 60vh; */
    padding: 0;
    opacity: .95;
    right: 0;
    top: 130px;
  &.active{
    transform: translateY(0);
  }
}
`;

const Header = ({enLeng}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const state = useSelector(state => state);

  const clicked = () => {
    setIsMenuOpen(!isMenuOpen);
    setisOpen(!isOpen);
  }

  return (
      <nav className={classes.header__menu}>
        <BurgerBtn 
          isOpen={isOpen}
          setisOpen={setisOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
        <MyList className={isMenuOpen ? 'active' : ''}>
          <li className={classes.header__list_item}>
            <Link 
              to='about'
              spy={true}
              smooth={true}
              duration= {600}>
              <HeaderBtn
                onClick={() => clicked()} paddingLeft='0'>
                {enLeng ? state[0].about : state[1].about}
              </HeaderBtn>
            </Link>
          </li>
          <li className={classes.header__list_item}>
            <Link 
              to='skills'
              spy={true}
              smooth={true}
              duration= {600}>
              <HeaderBtn
                onClick={() => clicked()}>
                {enLeng ? state[0].skills : state[1].skills}
              </HeaderBtn>
            </Link>  
          </li>
          <li className={classes.header__list_item}>
            <Link 
              to='portfolio'
              spy={true}
              smooth={true}
              duration= {600}>
              <HeaderBtn
                onClick={() => clicked()}>
                {enLeng ? state[0].portfolio : state[1].portfolio}
              </HeaderBtn>
            </Link>
          </li>
          <li className={classes.header__list_item}>
            <Link 
              to='contacts'
              spy={true}
              smooth={true}
              duration= {600}>
              <HeaderBtn
                onClick={() => clicked()} paddingRight='0'>
                {enLeng ? state[0].contacts : state[1].contacts}
              </HeaderBtn>
            </Link>  
          </li>
        </MyList>
      </nav>
  );
};

export default Header;