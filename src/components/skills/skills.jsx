import React from 'react';
import SkillsItem from './skills_item/skillsItem';

import classes from './skills.module.css';

const Skills = ({leng, enLeng}) => {

  return (
    <div className={classes.skills}>
      <h2 className={classes.skills__title}>
        {enLeng ? leng[0].skills : leng[1].skills}
      </h2>
      <div className={classes.skills__content}>
        <SkillsItem title='Html 5' icons='html5' skill='4'/>
        <SkillsItem title='Css 3' icons='css3' skill='4'/>
        <SkillsItem title='JavaScript' icons='javascript' skill='4'/>
        <SkillsItem title='React' icons='react' skill='3'/>
        <SkillsItem title='Redux' icons='redux' skill='2'/>
        <SkillsItem title='Sass' icons='sass' skill='4'/>
        <SkillsItem title='Bootstrap' icons='bootstrap' skill='3'/>
        <SkillsItem title='Next.js' icons='nextjs' skill='3'/>
        <SkillsItem title='Git' icons='git' skill='4'/>
        <SkillsItem title='Figma' icons='figma' skill='4'/>
      </div>
    </div>
  );
};

export default Skills;