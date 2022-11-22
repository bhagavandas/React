import React,  {useEffect, useState, href, useNavigate} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import './EmpCardDetails.css';
import Card from '@mui/material/Card';
import Input from '@mui/material/Input';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import axios from 'axios';
import { InputBase } from '@mui/material';

export default function EmpCardDetails()  {
    const [employee, setEmployee] = useState([])
    const [shouldrefresh, addrefresh] = useState(false)

    useEffect(() => {
        loadEmployee();
    }, [shouldrefresh]);

    // const loadEmployee = async () => {
    //     const result = await axios.get("http://localhost:8080/getAllEmployees")
    //     console.log("not working...."+ result.data.obj);

    //     setEmployee(result.data.obj);
        
    //      console.log(employee[0]);
    // }
         
    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/getAllEmployees")
        setEmployee(result.data.obj);
        
        console.log(employee);
    }

    async function deletearr(props){
        const result = await axios.delete("http://localhost:8080/deleteEmployee?employeeName="+ props)
        alert("Emplyee Deleted")
        console.log("delete",result.data)
        addrefresh(true)
    }

    async function updatearr(props){
        const result = await axios.get("http://localhost:8080/updateEmployeeByToken",props)
        alert("Emplyee Updated")
        console.log("Update",result.data)

    } 

    async function editarr(props){
        const result = await axios.put("http://localhost:8080/updateEmployee",props)
        alert("Emplyee Updated")
        console.log("Update",result.data)

    } 

//     let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path = "http://localhost:3000/Homepage"; 
//     navigate(path);
//   }

        return (
            <div className='content'>
                
                <Toolbar></Toolbar>
                <Card className = 'form'>
                
                    <Input variant="outlined" 
                    placeholder="Search..."
                    className='search'
                   
                    />
                    <h3 className='title'>Employee Details
                    <button className='user'  placeholder='+Add User'><a href="http://localhost:3000/Homepage" target="_blank" rel="noreferrer">+AddUser</a></button></h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='TableRow' style={{backgroundColor: '#42515F', width: '1549px',height: '67px'}}>
                                <TableCell className='TableHeaderCell'>Name</TableCell>
                                <TableCell className='TableHeaderCell'>Gender</TableCell>
                                <TableCell className='TableHeaderCell'>Department</TableCell>
                                <TableCell className='TableHeaderCell'>Salary</TableCell>
                                <TableCell className='TableHeaderCell'>Start Date</TableCell>
                                <TableCell className='TableHeaderCell'>Action</TableCell>
                                <TableCell className='TableHeaderCell'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                      employee.map((employees, index)=>(
                                
                            <TableRow key={index}>   
                                    
                                        <TableCell> {employees.employeeName} </TableCell>
                                        <TableCell> {employees.gender} </TableCell>
                                        <TableCell> {employees.department}</TableCell>
                                        <TableCell> {employees.salary}</TableCell>
                                        <TableCell> {employees.startDate}</TableCell>

                                        {/* <a href="http://localhost:80800/updateEmployee" target="_blank" rel="noreferrer"> */}
                                       <TableCell onClick={()=>{
                                        editarr(employees.employeeName)
                                    }}>  <EditIcon/>  </TableCell> 
                                    {/* </a> */}
                                    <TableCell onClick={()=>{
                                        deletearr(employees.employeeName)
                                    }}><DeleteIcon/> </TableCell>

                            </TableRow>
                            
                                      ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                </Card>
            </div>
        )
    }


