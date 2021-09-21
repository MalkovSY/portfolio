import React from 'react';

import classes from './skillsItem.module.css';

import javascript from './img/javascript.png';
import figma from './img/figma.png';
import react from './img/react.png';
import redux from './img/redux.png';
import nextjs from './img/nextjs.png';
import bootstrap from './img/bootstrap.png';
import html5 from './img/html5.png';
import css3 from './img/css3.png';
import sass from './img/sass.png';
import git from './img/git.png';
import plus from './img/plus.png';
import minus from './img/minus.png';

const SkillsItem = ({title, icons, skill}) => {
  let icon,
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

  switch (icons) {
    case 'figma':
      icon = figma;
      break;
    case 'react':
      icon = react;
      break;
    case 'bootstrap':
      icon = bootstrap;
      break;
    case 'sass':
      icon = sass;
      break;
    case 'html5':
      icon = html5;
      break;
    case 'css3':
      icon = css3;
    break;
    case 'redux':
      icon = redux;
    break;
    case 'nextjs':
      icon = nextjs;
    break;
    case 'git':
      icon = git;
    break;
    case 'javascript':
      icon = javascript;
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
        <img className={classes.skills_item_starIcon} src={star1} alt='plus icon'/>
        <img className={classes.skills_item_starIcon} src={star2} alt='plus icon'/>
        <img className={classes.skills_item_starIcon} src={star3} alt='plus icon'/>
        <img className={classes.skills_item_starIcon} src={star4} alt='plus icon'/>
        <img className={classes.skills_item_starIcon} src={star5} alt='minus icon'/>
      </div>
    </div>
  );
};

export default SkillsItem;