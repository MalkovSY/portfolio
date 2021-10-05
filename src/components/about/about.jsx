import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-scroll";

import classes from './about.module.css';

const About = ({enLeng}) => {
  const state = useSelector(state => state);

  return (
    <div className={classes.about} id='about'>
      <h2 className={classes.about_title}>
        {enLeng ? state[0].aboutTitle : state[1].aboutTitle}
      </h2>
      <div className={classes.about_text}>
        {enLeng ? state[0].aboutText1 : state[1].aboutText1}
      </div>
      <div className={classes.about_text}>
        {enLeng ? state[0].aboutText2 : state[1].aboutText2}
      </div>
      <div className={classes.about_text}>
        {enLeng ? state[0].aboutText3 : state[1].aboutText3}
      </div>
      <div className={classes.about_contact}>
      {enLeng ? state[0].aboutText4 : state[1].aboutText4}
      <Link 
        to='contacts'
        spy={true}
        smooth={true}
        duration= {600}>
        <button className={classes.about_contact_btn}>
          {enLeng ? state[0].contacts : state[1].contacts}
        </button>
      </Link>  
      </div>
    </div>
  );
};

export default About;
