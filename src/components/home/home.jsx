import React, { useState } from 'react';
import HomeBtn from '../UI/buttons/home/homeBtn';

import classes from './home.module.css';
import main_foto from './main_foto.png';

const Home = ({leng, enLeng, setEnLeng}) => {

  return (
    <div className={classes.home}>
      <div className={classes.home__content}>
        <h1 className={classes.home__content_title}>
          {enLeng ? leng[0].me : leng[1].me}
        </h1>
        <div className={classes.home__content_text}>
        {enLeng ? leng[0].about_me : leng[1].about_me}
        </div>
        <div className={classes.home__content_leng}>
          <HomeBtn setEnLeng={setEnLeng} color={enLeng ? leng[1].color : leng[0].color}>RU</HomeBtn>
          <HomeBtn setEnLeng={setEnLeng} color={enLeng ? leng[0].color : leng[1].color}>/ ENG</HomeBtn>
        </div>
      </div>
      <img className={classes.home__foto} src={main_foto} alt='My foto'/>
    </div>
  );
};

export default Home;