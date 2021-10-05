import React from 'react';
import { useSelector } from 'react-redux';

import HomeBtn from '../UI/buttons/home/homeBtn';

import classes from './home.module.css';
import main_foto from './main_foto.jpg';

const Home = ({enLeng, setEnLeng}) => {
  const state = useSelector(state => state);

  return (
    <div className={classes.home}>
      <div className={classes.home__content}>
        <h1 className={classes.home__content_title}>
          {enLeng ? state[0].me : state[1].me}
        </h1>
        <div className={classes.home__content_text}>
        {enLeng ? state[0].about_me : state[1].about_me}
        </div>
        <div className={classes.home__content_leng}>
          <HomeBtn setEnLeng={setEnLeng} color={enLeng ? state[1].color : state[0].color}>RU</HomeBtn>
          <HomeBtn setEnLeng={setEnLeng} color={enLeng ? state[0].color : state[1].color}>/ ENG</HomeBtn>
        </div>
      </div>
      <img className={classes.home__foto} src={main_foto} alt='My foto'/>
    </div>
  );
};

export default Home;
