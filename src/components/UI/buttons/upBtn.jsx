import React from 'react';
import { animateScroll as scroll } from "react-scroll";

import classes from './upBtn.module.css';

import up from './icons/up.png';

const UpBtn = () => {

  const scrollUp = () => {
    scroll.scrollToTop({
      duration: 500
    });
  }

  return (
    <img onClick={() => scrollUp()} className={classes.btn} src={up} alt='button up'/>
  );
};

export default UpBtn;