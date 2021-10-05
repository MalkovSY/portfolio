import React from 'react';

import classes from './socialItem.module.css';

const SocialItem = ({link, href}) => {
  return (
    <a className={classes.social_link} href={href} target='_blank' rel="noreferrer">
      <img className={classes.social_icon} src={link} alt={`social ${link}`}/>
    </a> 
  );
};

export default SocialItem;