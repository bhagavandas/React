import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppBar } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 130,

  },
  title: {
    fontSize: 30,
    color:green
  },
  
  card: {
    fontSize: 30,
    color:grey
   
  }
 
});

export const MuiAppBar = () => { 
  const classes = useStyles();
  

  return (
    
    <AppBar EMPLOYEE PAYROLL>
    <AppBar className={classes.root}>
      
        <Typography className={classes.title} >
          EMPLOYEE 
        </Typography>
        <Typography className={classes.card}>
          PAYROLL</Typography>
       
    </AppBar>
    
    </AppBar>
    
  );
}



