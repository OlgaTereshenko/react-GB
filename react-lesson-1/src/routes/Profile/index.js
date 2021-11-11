import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_PROFILE } from '../../store/profile/action';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    contentStyle: {
        fontSize: 35,
        color: '#4B0082',
        display: 'flex',
        justifyContent: 'center'
    },
    
  })); 

export const Profile = () => {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.isShow);
    const classes = useStyles();
    return (
      <div>
        <h1 className={classes.contentStyle}>Расскажите о себе</h1>
        <input type="checkbox" checked={isShow} onChange={()=>{
          dispatch({
            type: TOGGLE_SHOW_PROFILE 
          })
        }} />
      </div>
    );
  };
  