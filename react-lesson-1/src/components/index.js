
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {createTheme, ThemeProvider, Switch} from "@material-ui/core/";
import { ChatList } from "./chatList";
import { Form } from "./form";
import { MessageList } from "./messageList";

const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});


export const Homework = () => {
  const classes = useStyles();
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  };

  const onSendMessage = (value) => {
    sendMessage("user", value);
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === "support") {
      return;
    }
    const answerBot = setInterval(() => {
      sendMessage('support', "Ваше сообщение не доставлено");
     }, 2000);
     return () => {
     clearInterval(answerBot);
     };
}, [messageList]);


const [isDark, setIsDark] = useState(false)
const [theme, setTheme] = useState()

const changeThemeType =()=>{
  if (isDark) {
    const theme = createTheme({
      palette: {
        type: 'light'
      }
    });
    setTheme(theme)
  } else {
    const theme = createTheme({
      palette: {
        type: 'dark'
      }
    });
    setTheme(theme)
  }
  setIsDark(!isDark)
}

useEffect(()=>{
  const theme = createTheme({
    palette: {
      type: 'light'
    }
  });
  setTheme(theme)
}, []);


  return (
    <ThemeProvider theme={theme}>
      <Switch
        checked={isDark}
        onChange={changeThemeType}
        name='change theme'
      />
      <div className={classes.wrapper}>
        <ChatList
          list={[
            {name: "name",
            id: "1"},
            {name: "name",
            id: "2"},
            {name: "name",
            id: "3"},
            {name: "name",
            id: "4"}
          ]}
        />
        <div>
          <MessageList messageList={messageList} />
          <Form onSend={onSendMessage} />
        </div>
      </div>
    </ThemeProvider>
  );

};

