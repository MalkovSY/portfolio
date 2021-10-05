import React from 'react';

import classes from './aboutInput.module.css';

const AboutInput = ({setValue, ...props}) => {
  return (
    <input onChange={(e) => setValue(e.target.value)} className={classes.input} {...props}/>
  );
};

export default AboutInput;