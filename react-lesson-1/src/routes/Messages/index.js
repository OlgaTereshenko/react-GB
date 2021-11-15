import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/form";
import { MessageList } from "../../components/messageList";
import {getChatMessagesById} from "../../store/messages/selectors";
import { createMessage } from "../../store/messages/actions";
import { hasChatById } from "../../store/chats/selectors";

export const Homework = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messageList = useSelector(getChatMessagesById(chatId));
  const hasChat = useSelector(hasChatById(chatId));

  const sendMessage = (author, text) => {
    const newMessage = {
      author,
      text
    };
    dispatch(createMessage(newMessage, chatId))
  };

  const onSendMessage = (value) => {
    sendMessage("user", value);
  };

  useEffect(() => {
    if (!messageList || messageList.length === 0) {
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

if (!hasChat) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
    <MessageList messageList={messageList} />
    <Form onSend={onSendMessage} />
    </>
  );

};

