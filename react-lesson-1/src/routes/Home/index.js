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



export const HelloChat =()=> {
    const classes = useStyles();
    return (
        <div>
             <h2 className={classes.contentStyle}>Добро пожаловать в наш чат!</h2>
        </div>
    )
}
