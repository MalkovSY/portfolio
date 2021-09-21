import React from 'react';

import classes from './headerBtn.module.css'

const HeaderBtn = ({children, paddingLeft, paddingRight, props}) => {
  return (
    <button {...props} className={classes.btn} style={{paddingLeft: paddingLeft, paddingRight: paddingRight}} >
      {children}  
    </button>
  );
};

export default HeaderBtn;