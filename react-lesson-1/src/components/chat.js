import { ListItem, ListItemText } from "@material-ui/core";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import { Delete} from "@material-ui/icons";
import { IconButton} from "@material-ui/core";

export const Chat = ({ name, id }) => {
  return (
    <ListItem component={Link} to={`/chats/${id}`}>
      <ListItemText>{name}</ListItemText>
      <IconButton type="button">
            <Delete/>
      </IconButton>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string,
  name: propTypes.string
};
