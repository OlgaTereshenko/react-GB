import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Form } from "../../components/form";
import { MessageList } from "../../components/messageList";
import { CHATS } from "../../mocks/chats";

export const Homework = () => {
  const { chatId } = useParams();
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

if (!CHATS.find(({ id }) => id === chatId)) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
    <MessageList messageList={messageList} />
    <Form onSend={onSendMessage} />
    </>
  );

};

