const defState = [
  {about_me: 'Front-end web developer 25 years old,\n Saint Petersburg', me: 'Malkov\n Sergey', color: '#070707', home: 'Home', about: 'About me', 
    skills: 'Skills', portfolio: 'Portfolio', contacts: 'Contacts', aboutTitle: 'About me', aboutText1: "Hi, I'm Sergey – Front-end web developer. I'm writing in JS, React with its environment.", aboutText2:"I am constantly learning and improving",
    aboutText3: 'I want to work in a team with professionals, adopting their experience.', aboutText4: 'If you are ready to offer me a job, please contact.', contactsDescr: 'Want to know more or just chat?\n You are welcome!', contactsSocial: 'Write to me in\n Telegram, LinkedIn, Git, see summary'},
  {about_me: 'Фронтенд разработчик,\n Санкт-Петербург', me: 'Малков\n Сергей', color: '#828282', home: 'Главная', about: 'Обо мне', 
    skills: 'Навыки', portfolio: 'Портфолио', contacts: 'Контакты', aboutTitle: 'Обо мне', aboutText1: "Привет, я Сергей - фронтенд разработчик. Я пишу на JS, React с его окружением.", aboutText2:"Я постоянно учусь и совершенствуюсь.",
    aboutText3: 'Хочу работать в команде с профессионалами, перенимая их опыт.', aboutText4: 'Если вы готовы предложить мне работу - свяжитесь со мной.', contactsDescr: 'Хотите знать больше или просто пообщаться?\n Добро пожаловать!',  contactsSocial: 'Пишите мне в\n Telegram, LinkedIn, Git, смотрите резюме'},
];

export default function reducer (state = defState, action) {
  switch (action.type) {
    case "DELETE_ABOUT1":
       return [
        {about_me: 'Front-end web developer 25 years old,\n Saint Petersburg', me: 'Malkov\n Sergey', color: '#070707', home: 'Home', about: 'About me', 
          skills: 'Skills', portfolio: 'Portfolio', contacts: 'Contacts', aboutTitle: 'About me', aboutText2:"I am constantly learning and improving",
          aboutText3: 'Ready to implement excellent projects with wonderful people.', contactsDescr: 'Want to know more or just chat?\n You are welcome!', contactsSocial: 'Write to me in\n Telegram, LinkedIn, Git, see summary'},
        {about_me: 'Фронтенд разработчик,\n Санкт-Петербург', me: 'Малков\n Сергей', color: '#828282', home: 'Главная', about: 'Обо мне', 
          skills: 'Навыки', portfolio: 'Портфолио', contacts: 'Контакты', aboutTitle: 'Обо мне', aboutText2:"Я постоянно учусь и совершунствуюсь.",
          aboutText3: 'Готов реализовывать крутые проекты с крутыми людьми.', contactsDescr: 'Хотите знать больше или просто пообщаться?\n Добро пожаловать!',  contactsSocial: 'Пишите мне в\n Telegram, LinkedIn, Git, смотрите резюме'},
      ]
    case "DELETE_ABOUT2":
      return {...state, aboutText2: ''}
    case "DELETE_ABOUT3":
      return {...state, aboutText3: ''}
    default:
      return(state);
  }
};