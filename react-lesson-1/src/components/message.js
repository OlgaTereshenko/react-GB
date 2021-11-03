import propTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    textMessage: {
      marginTop: 20
    },
    colorAuthor: {
        color: '#EE82EE',
        textTransform: 'upperCase'
    }
  })); 


export const Message = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.textMessage}>
      <span className={classes.colorAuthor}>{props.author}</span>: "{props.text}"
    </div>
  );
};

Message.propTypes = {
  text: propTypes.string,
  author: propTypes.string
};

