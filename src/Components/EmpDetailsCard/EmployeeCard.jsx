import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from '@mui/material/Avatar';
import './EmployeeCard.css';
import img1 from './icon.png';
import axios from 'axios';


class EmployeeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            profilePic: '',
            gender: '',
            department: '',
            salary: '',
            notes: ''
            
        }
    }

    handleEmpName = (event) => {
        this.setState({
            employeeName: event.target.value
        })
    }

    handleProfile = (event) => {
        this.setState({
            profilePic: event.target.value
        })
    }

    handleGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleDepartment = (event) => {
        this.setState({
            department: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleNote = (event) => {
        this.setState({
            notes: event.target.value
        })
    }

    handleSubmit = async (e) => {

        // console.log(this.state);
        
        await axios.post("http://localhost:8080/registerEmployee", this.state).then((response)=>{
            console.log(response.data)}).catch((error)=>{

           console.log(error.response.data.message);
        })
        
        alert("Emplyee Added")
    }

    
  
    render() {
        return(
            <div>
            <Card className='form_card' variant="outlined">
                <CardContent>
                <Typography className="TableTitle" variant="h5" component="div">
                    Employee Payroll Form
                </Typography>
                <form className='form'>
                <div className='field_container'>
                    {/* <div className='form_label' onChange={(event) => this.handleEmpName(event)} value={this.state.employeeName} >Name</div> <TextField variant="outlined"  size="small"/><p>{this.state.employeeName}</p></div> 
                */}
                    <div>
                                <label className='emp-name-field' > Name </label>
                                <div >
                                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleEmpName(event)} value={this.state.employeeName} />
                                   </div> 
                
                    <div>
                                </div>
                                </div>
                            </div>
               
                <div className='field_container'  onChange={(event) => this.handleProfile(event)} value={this.state.profilePic}><div className='form_label'>Profile Image</div> 
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        
                        <FormControlLabel value="f" control={<Radio />} label={<Avatar className='profile_img' src={img1} />} />
                        <FormControlLabel value="m" control={<Radio />} label={<Avatar className='profile_img' src={img1}/>} />
                        <FormControlLabel value="b" control={<Radio />} label={<Avatar className='profile_img' src={img1}/>} />
                        <FormControlLabel value="g" control={<Radio />} label={<Avatar className='profile_img' src={img1}/>} />
                    </RadioGroup>
                </div>
                <div className='field_container' onChange={(event) => this.handleGender(event)} value={this.state.gender} ><div className='form_label'>Gender</div> 
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </div>
                <div className='field_container'  onChange={(event) => this.handleDepartment(event)} value={this.state.department}><div className='form_label'>Department</div> 
                    <div>
                        <Checkbox value="HR"/> HR
                        <Checkbox value="Sales"/> Sales
                        <Checkbox value="Finance"/> Finance
                        <Checkbox value="Engineer"/> Engineer
                        <Checkbox value="Others"/> Others
                    </div>
                </div>
                <div className='field_container'><div className='form_label'>Salary</div> 
                <div>
                <Select className='emp-salary'  onChange={(event) => this.handleSalary(event)} value={this.state.salary}>
                        <MenuItem value={30000}>30000</MenuItem>
                        <MenuItem value={40000}>40000</MenuItem>
                        <MenuItem value={50000}>50000</MenuItem>
                    </Select>
                </div>
                </div>

                <div className='field_container'><div className='form_label'>Start Date</div> 
                <div>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    label="startDate"
                    >
                        <MenuItem value={1}>20</MenuItem>
                        
                    </Select>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={2}
                    label="startDate"
                    >
                        <MenuItem value={2}>12</MenuItem>
                       
                    </Select>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={3}
                    label="startDate"
                    >
                        <MenuItem value={3}>2022</MenuItem>
                        
                    </Select>
                </div>
                </div>

                <div className='field_container'><div className='form_label' onChange={(event) => this.handleNote(event)} value={this.state.notes}>Notes</div> 
                    <div>
                    <TextareaAutosize
                        minRows={4}
                        aria-label="maximum height"
                        style={{ width: 500 }}
                    />
                        
                    </div>
                </div>
                
                <CardActions className="action_container">
                    <div><Button variant="outlined" className="action_button">Cancel</Button></div>
                    <div>
                    <Button variant="contained" className="submit" onClick={this.handleSubmit}>Submit</Button>
                        <Button variant="outlined" type="reset" className="action_button" onClick={this.reset}>Reset</Button>
                    </div>
                   
                
                </CardActions>
                </form>
                </CardContent>
               
            </Card> 
            </div> 
        )
    }
}

export default EmployeeCard;