import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './App.module.css';


const elem = "Начинаем изучение React!";

const Message=(props)=>{
  return (
    <h2 className={styles.ContentStyle}>{props.context}</h2>
  );
};

ReactDOM.render(
  <Message context={elem}/>,
  document.getElementById('root')
);


