import React from 'react';

import classes from './about.module.css';

const About = ({leng, enLeng}) => {
  return (
    <div className={classes.about}>
      <h2 className={classes.about_title}>
        {enLeng ? leng[0].aboutTitle : leng[1].aboutTitle}
      </h2>
      <div className={classes.about_text}>
        {enLeng ? leng[0].aboutText1 : leng[1].aboutText1}
      </div>
      <div className={classes.about_text}>
        {enLeng ? leng[0].aboutText2 : leng[1].aboutText2}
      </div>
      <div className={classes.about_text}>
        {enLeng ? leng[0].aboutText3 : leng[1].aboutText3}
      </div>
    </div>
  );
};

export default About;