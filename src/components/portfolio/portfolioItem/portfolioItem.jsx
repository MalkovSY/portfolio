import React from 'react';

import classes from './portfolioItem.module.css';

const PortfolioItem = ({link, linkName, code, screen, descr, enLeng, id}) => {
  let item;
  switch (id) {
    case '1':
      item = enLeng ? descr[0].portfolioItem1 : descr[1].portfolioItem1
      break;
    case '2':
      item = enLeng ? descr[0].portfolioItem2 : descr[1].portfolioItem2
      break;
    case '3':
      item = enLeng ? descr[0].portfolioItem3 : descr[1].portfolioItem3
      break;
    case '4':
      item = enLeng ? descr[0].portfolioItem4 : descr[1].portfolioItem4
      break;
    case '5':
      item = enLeng ? descr[0].portfolioItem5 : descr[1].portfolioItem5
      break;
    case '6':
      item = enLeng ? descr[0].portfolioItem6 : descr[1].portfolioItem6
      break;
    case '7':
      item = enLeng ? descr[0].portfolioItem7 : descr[1].portfolioItem7
    break;
    case '8':
      item = enLeng ? descr[0].portfolioItem8 : descr[1].portfolioItem8
    break;
    case '9':
      item = enLeng ? descr[0].portfolioItem9 : descr[1].portfolioItem9
    break;
    default:
      break;
  }

  return (
    <div className={classes.portfolioItem}>
      <div className={classes.portfolioItem__descr}>
        {item} (code: <a href={code} target="_blank" rel="noreferrer">git</a>)
      </div>
      <div className={classes.portfolioItem__wrapper}>
        <img className={classes.portfolioItem__img} src={screen} alt='screen'/>
      </div>
      <a className={classes.portfolioItem__link} href={link} target="_blank" rel="noreferrer">
        {linkName}
      </a>
    </div>
  );
};

export default PortfolioItem;