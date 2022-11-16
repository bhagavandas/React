
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import "./EmpCard.css"

import React, { Component } from 'react';
import { CardContent } from '@material-ui/core';

class EmpCard extends Component {
  render() {
    return (
      <div >
        <Card className='card'>
      <form>
        <h1 className='title'>
        Employee Payroll Form 
        </h1>
        <div className='details'>
        <label className='details'>
          Name
          </label>
            <input className='input' type="text"  /> 
            </div>

            <div className='details'>
            <label className='details'>
          Profile image
          </label>
        <input className='input' type="radio" value="Male" name="gender" /> Icon1
        <input  type="radio" value="Female" name="gender" /> Icon2
        <input  type="radio" value="Female" name="gender" /> Icon3
        <input  type="radio" value="Female" name="gender" /> Icon4
        
        
      </div>

      <div className='details'>
            <label className='details'>
          Gender
          </label>
        <input className='input' type="radio" value="Male" name="gender" /> Male
        <input  type="radio" value="Female" name="gender" /> Female
        <input  type="radio" value="Female" name="gender" /> Other
        
      </div>

      <div className='details'>
            <label className='details'>
          Department
          </label>
          <Checkbox className='input' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />HR
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />Sales
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />Finance
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />Engineer
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />Others
      </div>

      <div className='details'>
           
          <FormControl className='input'>
          <InputLabel className='details'>Salary</InputLabel>
          
  <Select className='input' placeholder='Day'
    
  >
    <MenuItem value={2020} >Select Salary</MenuItem>
    
  </Select>
      </FormControl>
</div>

<div className='details'>
           
          <FormControl >
            <div>
            <InputLabel className='details'>Start Date</InputLabel>
  <Select className='input' placeholder='Day'
    
  >
    <MenuItem value={2020} >Day</MenuItem>
    
  </Select>
  
  <Select className='input'
    
  >
    <MenuItem value={2020}>Month</MenuItem>
    
  </Select>
  
  <Select className='input'
    
  >
     <MenuItem value={2020}>Year</MenuItem>
  
  </Select>
  </div>   
      
      </FormControl>
</div>
</form>
<CardContent>
  <Button variant="outlined">Cancel</Button>
  <Button variant="outlined">Submit</Button>
  <Button variant="outlined">Reset</Button>
</CardContent>


            
  </Card>
      </div>
    );
  }
}

export default EmpCard;



