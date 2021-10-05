import React from 'react';

import calsses from './contactBtn.module.css';

const ContactBtn = ({children, ...props}) => {
  return (
    <a className={calsses.btn} {...props} href='https://t.me/MalkovSY'>
      {children}
    </a>
  );
};

export default ContactBtn;