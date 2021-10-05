import React from 'react';
import { useSelector } from 'react-redux';
import ContactBtn from '../UI/buttons/contact/contactBtn';
import SocialItem from './socialItem/socialItem';

import classes from './contacts.module.css';

import li from './icons/in.svg';
import tg from './icons/tg.svg';
import git from './icons/git.svg';
import rm from './icons/rm.png';
import gm from './icons/gmail.png';

const Contacts = ({enLeng}) => {
  const state = useSelector(state => state);

  return (
    <div className={classes.contacts} id='contacts'>
      <h2 className={classes.contacts__title}>
        {enLeng ? state[0].contacts : state[1].contacts}
      </h2>
      <div className={classes.contacts__descr}>
        {enLeng ? state[0].contactsDescr : state[1].contactsDescr}
      </div>
      <ContactBtn>
        Send message
      </ContactBtn>
      <div className={classes.contacts__social}>
        <SocialItem link={git} href='https://github.com/MalkovSY'/>
        <SocialItem link={tg} href='https://t.me/MalkovSY'/>
        <SocialItem link={gm} href='mailto:pewpewinmyhead@gmail.com'/>
        <SocialItem link={li} href='https://www.linkedin.com/in/malkovsy/'/>
        <SocialItem link={rm} href='https://spb.hh.ru/resume/86a7bb27ff0909c8cd0039ed1f3770695a4e57'/>
      </div>
        <div className={classes.contacts__social_descr}>
          {enLeng ? state[0].contactsSocial : state[1].contactsSocial}
        </div>
    </div>
  );
};

export default Contacts;
