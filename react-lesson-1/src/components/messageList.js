import propTypes from "prop-types";
import { Message } from "./message";


export const MessageList = (props) => {
  return (
    <div>
      {props.messageList.map((item) => (
        <Message key={item.id} {...item} />
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messageList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      text: propTypes.string,
      author: propTypes.string
    })
  )
};

MessageList.defaultProps = {
  messageList: []
};