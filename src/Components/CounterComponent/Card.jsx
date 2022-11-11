import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    
    fontSize: 20,
    width: 1000,
    marginTop:100,
    marginBottom: 600,

  },
  title: {
    fontSize: 20,
    
  },
  
  card: {
    fontSize: 30,
    width: 200,
    marginBottom: 200,
  }
 
});

export const MuiCard = () => { 
  const classes = useStyles();
  

  return (
    
    <Card>
    <Card className={classes.root}>
      
        <Typography className={classes.title} >
          Employee Payroll Form 
         
        </Typography>
        
        
       
    </Card>
    
    </Card>
    
  );
}



