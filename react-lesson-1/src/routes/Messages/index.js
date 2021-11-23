import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/form";
import { MessageList } from "../../components/messageList";
import {getChatMessagesById} from "../../store/messages/selectors";
import { addMessageWithThunk, onTrackingAddMessageWithThunk, offTrackingAddMessageWithThunk, onTrackingRemovedMessageWithThunk, offTrackingRemovedMessageWithThunk } from "../../store/messages/actions";
import { hasChatById } from "../../store/chats/selectors";
import { getUser } from "../../store/user/reducer";
import { createMessage } from "../../helpers";

export const Homework = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const userId = createMessage(getUser);
  const messageList = useSelector(getChatMessagesById(chatId));
  const hasChat = useSelector(hasChatById(chatId));

  // const sendMessage = (author, text) => {
  //   const newMessage = {
  //     author,
  //     text
  //   };
  //   dispatch(addMessage (newMessage, chatId))
  // };

  const onSendMessage = (text) => {
    const message = createMessage(userId, text);
    dispatch(addMessageWithThunk(message, chatId))
  };

  useEffect(() => {
    dispatch(onTrackingAddMessageWithThunk(chatId));
    dispatch(onTrackingRemovedMessageWithThunk(chatId));

    return ()=>{
      dispatch(offTrackingAddMessageWithThunk(chatId));
     dispatch(offTrackingRemovedMessageWithThunk(chatId));
    }
  }, [chatId])

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

