import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PortfolioItem from './portfolioItem/portfolioItem';
import classes from './portfolio.module.css';

import uberLong from './portfolioItem/itemScreen/uberLong.png';
import postingApp from './portfolioItem/itemScreen/postingApp.png';
import gotApp from './portfolioItem/itemScreen/got.png';
import restoApp from './portfolioItem/itemScreen/restoApp.png';
import airMobile from './portfolioItem/itemScreen/airMobile.png';
import wawe from './portfolioItem/itemScreen/wawe.png';
import paintings from './portfolioItem/itemScreen/paintings.png';

const Portfolio = ({enLeng}) => {
  const state = useSelector(state => state);

  const [descr, setDescr] = useState([
    {portfolioItem1: 'Html coding by layout, responsive with media, Sass, bootstrap', portfolioItem2: 'SPA on React using bootstrap, filters, search', portfolioItem3: 'SPA on React, works with API GoT DB', portfolioItem4: 'SPA on React + Redux, food card(loaded from json server), basket of orders',
    portfolioItem5: 'SPA on React-native, departure schedule MSK - NY', portfolioItem6: 'Html coding by layout, responsive with media', portfolioItem7: 'Working with native JS, various modal windows, sliders (written in native), input masks, etc. (for part of the functionality, you need to run db.json)'},
    {portfolioItem1: 'Верстка по макету, адаптив с использованием медиа, Sass, bootstrap', portfolioItem2: 'SPA на React с использованием bootstrap, есть фильтры, поиск', portfolioItem3: 'SPA на React, работа с DB API по GoT', portfolioItem4: 'SPA на React + Redux, меню (данные берутся с сервера json), корзина заказов', portfolioItem5: 'SPA на React-native, расписание вылетов МСК - NY', portfolioItem6: 'Верстка по макету, адаптив с использованием медиа',portfolioItem7: 'Работа с нативным JS, различные модальные окна, слайдеры(написаны на нативе), маски для ввода, пр. (для части функционала нужно запускать db.json)'}
  ]);

  return (
    <div className={classes.portfolio} id='portfolio'>
      <h2 className={classes.portfolio__title}>
        {enLeng ? state[0].portfolio : state[1].portfolio}
      </h2>
      <PortfolioItem 
        linkName='uber website' 
        link='https://malkovsy.github.io/layout/uber/' 
        code='https://github.com/MalkovSY/layout/tree/main/uber'
        screen={uberLong} 
        descr={descr} 
        id='1' 
        enLeng={enLeng}
        setDescr={setDescr}/>
      <PortfolioItem 
        linkName='wawe website' 
        link='https://malkovsy.github.io/layout/wawe/' 
        code='https://github.com/MalkovSY/layout/tree/main/wawe'
        screen={wawe} 
        descr={descr} 
        id='6' 
        enLeng={enLeng}/>
      <PortfolioItem 
        linkName='Paintings website' 
        link='https://malkovsy.github.io/layout/paintings/'
        code='https://github.com/MalkovSY/layout/tree/main/paintings'
        screen={paintings} 
        descr={descr} 
        id='7' 
        enLeng={enLeng}/>
      <PortfolioItem 
        linkName='posting app' 
        link='https://github.com/MalkovSY/posting-app' 
        code='https://github.com/MalkovSY/posting-app/tree/main/src'
        screen={postingApp} 
        descr={descr} 
        id='2' 
        enLeng={enLeng}/>
      <PortfolioItem 
        linkName='Game of Thrones DB' 
        link='https://github.com/MalkovSY/GoT-app'
        code='https://github.com/MalkovSY/GoT-app/tree/main/src'
        screen={gotApp} 
        descr={descr} 
        id='3' 
        enLeng={enLeng}/>
      <PortfolioItem 
        linkName='Restaurant app' 
        link='https://github.com/MalkovSY/restaurant-app'
        code='https://github.com/MalkovSY/restaurant-app/tree/main/src'
        screen={restoApp} 
        descr={descr} 
        id='4' 
        enLeng={enLeng}/>
      <PortfolioItem 
        linkName='Airport react-native' 
        link='https://github.com/MalkovSY/airport-app'
        code='https://github.com/MalkovSY/airport-app'
        screen={airMobile} 
        descr={descr} 
        id='5' 
        enLeng={enLeng}/>
    </div>
  );
};

export default Portfolio;