import { Card, Button, Avatar, Radio, MenuItem, CardActions, CardContent, FormControlLabel, RadioGroup, Select, TextareaAutosize, TextField, Typography, Checkbox } from '@material-ui/core'
import React, { Component } from 'react'

import "./EmployeeCard.css"

class EmployeeCard extends Component {
    constructor(){
        super();
        this.state = {empName: "",
        gender:'',
        department:'',
        salary:'',
        note:'',
        error:'Please enter proper name'

        
    }

    }

    handleFirstName=(event)=>{
        // console.log(event.target.value);
        let fnameError = "Please enter your name"
        let fname = event.target.value
        let regx =RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
        if(regx.test(fname)){
         this.setState({
             empName: fname,
             fnameError: ""
         }) }
         else{
             this.setState({
                 empName:fname,
                 fnameError : "please enter proper name"
             })
             ;
                }
            console.log(this.empName);
        }

        handleSubmit=()=>{
            // axios.post("http://localhost:8090/add");
        }



  render() {
    return (
      
      <Card className='form_card' variant="outlined">
        <CardContent>
            <Typography className='title' variant="h5" component="div">
                Employee Payroll Form
            </Typography>
            <div className='form_details'><div className='form_label'>Name</div>
            <TextField variant="outlined" onChange={this.handleFirstName} size="small" /></div>

            <div className='form_details'><div className='form_label'>Profile image</div>
                <RadioGroup
                row 
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                    <FormControlLabel  value="female" control={<Radio />} 
                  />
                  <FormControlLabel  value="male" control={<Radio />} 
                  />
                  <FormControlLabel  value="other" control={<Radio />} 
                  />
                </RadioGroup>
                </div>
                <div className='form_details'><div className='form_label'>Gender</div>
                <RadioGroup 
                    row
                    
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    >
                       <FormControlLabel value="female" control={<Radio />} label="Female"/>
                    <FormControlLabel value="male" control={<Radio />} label="Male"/>
                                   
                </RadioGroup>
                </div>
                <div className='form_details'><div className='form_label'>Department </div>
                <div>
                    <Checkbox /> HR
                    <Checkbox /> Sales
                    <Checkbox /> Finance
                    <Checkbox /> Engineer
                    <Checkbox /> Other
                </div>
                </div>
                <div className='form_details'><div className='form_label'>Salary</div>
                <div>
                    <Select
                    labelId="demo-simple-select-label"
                    id="simple-select-label"
                    value="{1}"
                    label="salary"
                    >
                        <MenuItem value={1}>20000</MenuItem>
                        <MenuItem value={1}>30000</MenuItem>
                        <MenuItem value={1}>40000</MenuItem>
                    </Select>
                    </div>
                </div>

                <div className='form_details'><div className='form_label'>StartDate</div>
                <div>
                    <Select
                    labelId="demo-simple-select-label"
                    id="simple-select-label"
                    value="{1}"
                    label="Day"
                    >
                        <MenuItem value={1}>Day</MenuItem>
                        
                    </Select>
                    </div>
                    <div>
                    <Select
                    labelId="demo-simple-select-label"
                    id="simple-select-label"
                    value="{1}"
                    label="Month"
                    >
                        <MenuItem value={1}>Month</MenuItem>
                        
                    </Select>
                    
                    </div>
                    <div>
                    <Select
                    labelId="demo-simple-select-label"
                    id="simple-select-label"
                    value="{1}"
                    label="Month"
                    >
                        <MenuItem value={1}>Month</MenuItem>
                        
                    </Select>
                    
                    </div>
                </div>

                <div className='form_details'><div className='form_label'>Notes</div>
                <div>
                    <TextareaAutosize
                    minRows={4}
                    aria-label="maximum height"
                    style={{width: 500}}
                    />

                </div>
                </div>
                <label>
            <Button variant="outlined">Cancel</Button></label>
            <label>
            
            <Button className='submit' variant="outlined" onClick={this.handleSubmit}>Submit</Button>
            </label>
            <label>
            <Button className='button' variant="outlined" >Reset</Button>
        </label>

        </CardContent>
        
      </Card>
    )
  }
}
    

export default EmployeeCard;
    

