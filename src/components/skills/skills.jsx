import React from 'react';
import SkillsItem from './skills_item/skillsItem';

import classes from './skills.module.css';

import javascript from './skills_item/img/javascript.png';
import figma from './skills_item/img/figma.png';
import react from './skills_item/img/react.png';
import redux from './skills_item/img/redux.png';
import nextjs from './skills_item/img/nextjs.png';
import bootstrap from './skills_item/img/bootstrap.png';
import html5 from './skills_item/img/html5.png';
import css3 from './skills_item/img/css3.png';
import sass from './skills_item/img/sass.png';
import git from './skills_item/img/git.png';
import { useSelector } from 'react-redux';

const Skills = ({enLeng}) => {

  const state = useSelector(state => state);

  return (
    <div className={classes.skills} id='skills'>
      <h2 className={classes.skills__title}>
        {enLeng ? state[0].skills : state[1].skills}
      </h2>
      <div className={classes.skills__content}>
        <SkillsItem title='Html 5' icon={html5} skill='4'/>
        <SkillsItem title='Css 3' icon={css3} skill='4'/>
        <SkillsItem title='Sass' icon={sass} skill='4'/>
        <SkillsItem title='JavaScript' icon={javascript} skill='4'/>
        <SkillsItem title='React' icon={react} skill='3'/>
        <SkillsItem title='Redux' icon={redux} skill='3'/>
        <SkillsItem title='Bootstrap' icon={bootstrap} skill='3'/>
        <SkillsItem title='Next.js' icon={nextjs} skill='2'/>
        <SkillsItem title='Git' icon={git} skill='4'/>
        <SkillsItem title='Figma' icon={figma} skill='4'/>
      </div>
    </div>
  );
};

export default Skills;
