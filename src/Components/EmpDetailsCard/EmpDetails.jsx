import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./EmpDetails.css"
import "./icon.png"
import { Card,Avatar } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import icon from './icon.png';

export default class EmpDetails extends Component {
    
  render() {
    return (
        
      <div className='content'>
        
        <Card className='form'>
      
            
        <h3 className='title'>Employee Details <input className='user' placeholder='+ Add User'></input></h3>
          <InputBase 
              placeholder="Search…"
              className='search'
              inputProps={{ 'aria-label': 'search' }}
            />
        <Table className='table' aria-label="customized table">
          <TableHead>
          <TableCell align="right"></TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">GENDER</TableCell>
              <TableCell align="right">DEPARTMENT</TableCell>
              <TableCell align="right">SALARY</TableCell>
              <TableCell align="right">START DATE</TableCell>
              <TableCell align="right">ACTIONS</TableCell>
            
          
              </TableHead>
              <TableRow className='row'>
              <TableCell align="right">{<Avatar className='profile_img'/>}</TableCell>
              <TableCell align="right" >Das</TableCell>
              <TableCell align="right">Male</TableCell>
              <TableCell align="right">HR</TableCell>
              <TableCell align="right">50000</TableCell>
              <TableCell align="right">14 Mar 2020</TableCell>
              <TableCell align="right"></TableCell>
            
              </TableRow>
              <TableRow className='row'>
              <TableCell align="right">{<Avatar className='profile_img'/>}</TableCell>
              <TableCell align="right" >Anirban</TableCell>
              <TableCell align="right">Male</TableCell>
              <TableCell align="right">Finance</TableCell>
              <TableCell align="right">40000</TableCell>
              <TableCell align="right">18 Mar 2020</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
              
              <TableRow className='row'>
              <TableCell align="right">{<Avatar className='profile_img'/>}</TableCell>
              <TableCell align="right" >Falguni</TableCell>
              <TableCell align="right">Female</TableCell>
              <TableCell align="right">Sales</TableCell>
              <TableCell align="right">60000</TableCell>
              <TableCell align="right">10 Apr 2020</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
      </Table>
   
    
      </Card>
    </div>
    
    )
  }
}
