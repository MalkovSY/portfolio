import { useState } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { isMobile } from 'react-device-detect'; на данном этапе излишне, понадобится при добавлении функционала
import Header from '../header/header';
import Home from '../home/home';
import About from '../about/about';
import Skills from '../skills/skills';
import Portfolio from '../portfolio/portfolio';
import Contacts from '../contacts/contacts';

import './App.css';
import UpBtn from '../UI/buttons/upBtn';

function App() {

  const [enLeng, setEnLeng] = useState(false);

  return (
      <div className='container'>
        <Header enLeng={enLeng}/>
        <Home enLeng={enLeng} setEnLeng={setEnLeng}/>
        <About enLeng={enLeng}/>
        <Skills enLeng={enLeng} />
        <Portfolio enLeng={enLeng}/>
        <Contacts enLeng={enLeng}/>
        <UpBtn/>
      </div>
  );
}

export default App;
