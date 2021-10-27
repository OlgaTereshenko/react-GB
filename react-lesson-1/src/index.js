import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = "Начинаем изучение React!";

ReactDOM.render(
  <App context={text}/>,
  document.getElementById('root')
);


