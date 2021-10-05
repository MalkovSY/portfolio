import React from 'react';

import classes from './aboutBtn.module.css';

const AboutBtn = ({children, sendPost, ...props}) => {
  return (
    <button onClick={() => sendPost()} className={classes.btn} {...props}>
      {children}
    </button>
  );
};

export default AboutBtn;