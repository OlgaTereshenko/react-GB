import React, {useState, useRef, useEffect} from 'react';
import propTypes from "prop-types";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      position: "absolute",
      bottom: 0,
      width: '80%'
    },
    input: {
      flexGrow: 1,
      backgroundColor: '#E6E6FA'
    },
    icon: {
        color: '#4B0082'
    }

  }));

export const Form=(props)=>{
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const classes = useStyles();
  
  const saveMessage =(event)=> {
    setValue(event.target.value);
  };

  const onSubmit = (e)=>{
    e.preventDefault();
    props.onSend(value);
    setValue('');
  }

  useEffect(()=>{
    inputRef.current.focus();
  });

    return (
        <Paper
          className={classes.paper}
          component="form"
          onSubmit={onSubmit}
        >
          <InputBase
            inputRef={inputRef}
            className={classes.input}
            onChange={saveMessage}
            placeholder={props.placeholder}
            value={value}
            type="text"
          />
          <IconButton type="submit">
            <Send className={classes.icon}/>
          </IconButton>
        </Paper>
      );
    };
    
    Form.propTypes = {
      onSend: propTypes.func,
      placeholder: propTypes.string
    };
    
    Form.defaultProps = {
      placeholder: "Введите сообщение"
    };

 