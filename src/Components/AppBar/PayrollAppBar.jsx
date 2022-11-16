
import { AppBar } from '@material-ui/core';
import "./PayrollAppBar.css";
import icon from './icon.png';

import React, { Component } from 'react'
import Card from '@material-ui/core/Card';

export default class PayrollAppBar extends Component {
  render() {
    return (
      <div>
        
      <AppBar className='bar'>
        {/* <div className='logo'>
        <img src={icon} alt="Logo" />
        </div> */}
        <div>
        <img className='logo' src={icon} alt="Logo"></img>
          <span className='Apptitle'> EMPLOYEE </span><br></br>
          <span className='title' color='green'> PAYROLL</span>
          
       
        </div>
       
         
      </AppBar>
      
      </div>
    )
  }
}



