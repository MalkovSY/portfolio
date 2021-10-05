import React from 'react';

import classes from './skillsItem.module.css';

import plus from './img/plus.png';
import minus from './img/minus.png';

const SkillsItem = ({title, icon, skill}) => {
  let 
      star1,
      star2,
      star3,
      star4,
      star5;

  switch (skill) {
    case '1':
      star1 = plus;
      star2 = minus;
      star3 = minus;
      star4 = minus;
      star5 = minus;
      break;
    case '2':
      star1 = plus;
      star2 = plus;
      star3 = minus;
      star4 = minus;
      star5 = minus;
      break;
    case '3':
      star1 = plus;
      star2 = plus;
      star3 = plus;
      star4 = minus;
      star5 = minus;
      break;
    case '4':
      star1 = plus;
      star2 = plus;
      star3 = plus;
      star4 = plus;
      star5 = minus;
      break;
    case '5':
      star1 = plus;
      star2 = plus;
      star3 = plus;
      star4 = plus;
      star5 = plus;
      break;
    default:
      break;
  }

  return (
    <div className={classes.skills_item}>
      <div className={classes.skills_item_wrapper_icon}>
        <img className={classes.skills_item_icon} src={icon} alt='figma icon'/>
      </div>
      <span className={classes.skills_item_title}>{title}</span>
      <div className={classes.skills_item_star}>
        <img className={classes.skills_item_starIcon} src={star1} alt='rating star icon'/>
        <img className={classes.skills_item_starIcon} src={star2} alt='rating star icon'/>
        <img className={classes.skills_item_starIcon} src={star3} alt='rating star icon'/>
        <img className={classes.skills_item_starIcon} src={star4} alt='rating star icon'/>
        <img className={classes.skills_item_starIcon} src={star5} alt='rating star icon'/>
      </div>
    </div>
  );
};

export default SkillsItem;
