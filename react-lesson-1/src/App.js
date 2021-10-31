import logo from './logo.svg';
import styles from './App.module.css';
import React, {useState, useEffect} from 'react';

let name = prompt('Как ваше имя?')

const App=(props)=>{
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  
  const saveMessage =(event)=> {
    setValue(event.target.value);
  };

  const addMessage=(author, text)=>{
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    addMessage(name, value);
    setValue('');
  }

  useEffect(()=>{
    const lastAuthor = messageList[messageList.length-1]
    if(messageList.length === 0)
      return;
    if(lastAuthor.author === 'support')
      return;

      const answerBot = setInterval(() => {
         addMessage('support', "Ваше сообщение не доставлено");
        }, 2000);
        return () => {
        clearInterval(answerBot);
        };
  }, [messageList]);


function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  
      </header>
    </div>
  );
}

export default App;
