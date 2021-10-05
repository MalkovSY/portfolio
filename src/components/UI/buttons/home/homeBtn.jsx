import React from 'react';

import classes from './homeBtn.module.css';

const HomeBtn = ({children, color, setEnLeng, ...props}) => {
  return (
    <button onClick={()=>setEnLeng(leng => !leng)} {...props} className={classes.btn} style={{color: color}}>
      {children}
    </button>
  );
};

export default HomeBtn;