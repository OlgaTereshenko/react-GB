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


  return (
  <div className={styles.chatBox}>
      <h2 className={styles.ContentStyle}>{props.context}</h2>
      <div className={styles.chat}>
        <ul className={styles.ulList}>
          {messageList.map(item =>(
          <li className={styles.chatMessage}><span className={styles.author}>{item.author}</span>: "{item.text}"</li>
          ))}
        </ul>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
            <input value={value}
              onChange={saveMessage}
              className={styles.input} 
              type="text"
              placeholder="Введите сообщение" />
            <button className={styles.button}
              type="submit">Отправить
            </button>
      </form>
    </div>
  );
};

export default App;
