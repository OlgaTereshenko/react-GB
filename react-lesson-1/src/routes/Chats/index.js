import { Route, Switch } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/chatList";
import { Homework } from "../Messages";
import {getChatList} from "../../store/chats/selectors";
import {createChat} from "../../helpers";
import { removeMessagesByChatIdWithThunk} from "../../store/messages/actions";
import {addChatWithThunk, removeChatWithThunk, onTrackingAddChatWithThunk, onTrackingRemoveChatWithThunk, offTrackingAddChatWithThunk, offTrackingRemoveChatWithThunk} from '../../store/chats/actions';

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
    dispatch(addChatWithThunk(createChat('chat name')))
  }, []);

  const onDelete =useCallback((chatId)=>{
    dispatch(removeChatWithThunk(chatId))
    dispatch(removeMessagesByChatIdWithThunk(chatId))
  }, []);

  useEffect(()=>{
    dispatch(onTrackingAddChatWithThunk);
    dispatch(onTrackingRemoveChatWithThunk);

    return ()=>{
      dispatch(offTrackingAddChatWithThunk);
    dispatch(offTrackingRemoveChatWithThunk);
    }
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