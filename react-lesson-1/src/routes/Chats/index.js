import { Route, Switch } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/chatList";
import { Homework } from "../Messages";
import {getChatList} from "../../store/chats/selectors";
import {createChat, removeChat, setChats} from "../../store/chats/actions";
import {nanoid} from "nanoid";
import { CHATS } from "../../mocks/chats";
import {createMessage, removeMessagesByChatId} from "../../store/messages/actions";

const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});

export const Chats = () => {
  const chats = useSelector(getChatList);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onCreate = useCallback(()=>{
    dispatch(createChat({
      id: nanoid(),
      name: 'chatName'
    }))
  }, []);

  const onDelete =(chatId)=>{
    dispatch(removeChat(chatId))
    dispatch(removeMessagesByChatId(chatId))
  }

  useEffect(()=>{
    dispatch(setChats(CHATS))
  }, [])


  return (
    <div className={classes.wrapper}>
      <div>
      <ChatList onDelete={onDelete} list={chats}/>
      <Button onClick={onCreate}>Новый чат</Button>
      </div>
      <div>
        <Switch>
          <Route component={Homework} path="/chats/:chatId" />
        </Switch>
      </div>
    </div>
  );
};