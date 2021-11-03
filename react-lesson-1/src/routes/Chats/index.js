import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/chatList";
import { Homework } from "../Messages";
import { CHATS } from "../../mocks/chats";

const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});

export const Chats = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ChatList list={CHATS} />
      <div>
        <Switch>
          <Route component={Homework} path="/chats/:chatId" />
        </Switch>
      </div>
    </div>
  );
};