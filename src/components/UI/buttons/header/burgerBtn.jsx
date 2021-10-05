import React, { useState } from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 768px){
    display: block;
  }
 
  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active{
    span:nth-of-type(1){
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }
    span:nth-of-type(2){
      opacity: 0;
    }
    span:nth-of-type(3){
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  }
  
`;

const Bar = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  border-radius: 4px;
  margin-bottom: 7px;
  background-color: #000;
`;

const BurgerBtn = ({isMenuOpen, setIsMenuOpen, isOpen, setisOpen}) => {
  

  return (
    <MenuButton
      className={isOpen ? 'active' : ''}
      onClick={() => {
        setisOpen(!isOpen);
        setIsMenuOpen(!isMenuOpen);
      }}>
      <Bar/>
      <Bar/>
      <Bar/>
    </MenuButton>
  );
};

export default BurgerBtn;