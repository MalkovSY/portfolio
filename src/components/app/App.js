import { useState } from 'react';
import Header from '../header/header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from '../home/home';
import About from '../about/about';
import Skills from '../skills/skills';

function App() {
  const [leng, setLeng] = useState([
    {about_me: 'Front-end web developer 25 years old,\n Saint Petersburg', me: 'Malkov\n Sergey', color: '#070707', home: 'Home', about: 'About me', 
      skills: 'Skills', portfolio: 'Portfolio', contacts: 'Contacts', aboutTitle: 'About me', aboutText1: "Hi, I'm Sergey – Front-end web developer. I'm interested in JavaScript, React and everything connected with it.", aboutText2:"I am constantly learning and improving",
      aboutText3: 'Ready to implement excellent projects with wonderful people.'},
    {about_me: 'Фронтенд разработчик 25 лет,\n Санкт-Петербург', me: 'Малков\n Сергей', color: '#828282', home: 'Главная', about: 'Обо мне', 
    skills: 'Навыки', portfolio: 'Портфолио', contacts: 'Контакты', aboutTitle: 'Обо мне', aboutText1: "Привет, я Сергей - фронтенд разработчик. Я интересуюсь JS, реактом и всем связанным с этим.", aboutText2:"Я постоянно учусь и совершунствуюсь.",
    aboutText3: 'Готов реализовывать крутые проекты с крутыми людьми.'},
  ]);
  const [enLeng, setEnLeng] = useState(true);

  return (
    <Router>
      <div className='container'>
        <Header leng={leng} enLeng={enLeng}/>
        <Home leng={leng} enLeng={enLeng} setEnLeng={setEnLeng}/>
        <About leng={leng} enLeng={enLeng}/>
        <Skills leng={leng} enLeng={enLeng}/>
      </div>
    </Router>
  );
}

export default App;