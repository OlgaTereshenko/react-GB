import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    contentStyle: {
        fontSize: 35,
        color: '#4B0082',
        display: 'flex',
        justifyContent: 'center'
    },
    
  })); 

export const HelloChatTextIDs = {
    title: 'HelloChat_title'
}

export const HelloChat =()=> {
    const classes = useStyles();
    return (
        <div>
             <h2 className={classes.contentStyle} data-testid={HelloChatTextIDs.title}>Добро пожаловать в наш чат!</h2>
        </div>
    )
}
