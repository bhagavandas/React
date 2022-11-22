// import React,  {useEffect, useState} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Toolbar from '@mui/material/Toolbar';
// import './EmpCardDetails.css';
// import Card from '@mui/material/Card';
// import Input from '@mui/material/Input';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';


// import axios from 'axios';
// import { InputBase } from '@mui/material';

// export default function EmpCardDetails()  {

//     const [employee, setEmployee] = useState([])

//     useEffect(() => {
//         loadEmployee();
//     }, []);

//     const loadEmployee = async () => {
//         const result = await axios.get("http://localhost:8080/getAllEmployees")
//         console.log("not working....");
//         setEmployee(result.data);
//         // console.log(result.data);
//         console.log("checking....");
//         employee.push(result.data);
//         console.log("working....");
//         console.log(employee);
//         console.log("fetching....");
//         console.log(employee.employeeName);

//     }
//     async function deletearr(props){
//         const result = await axios.get("http://localhost:8080/deleteEmployee",props)
//         alert("Emplyee Deleted")
//         console.log("delete",result.data)

//     }

//     async function updatearr(props){
//         const result = await axios.get("http://localhost:8080/updateEmployeeByToken",props)
//         alert("Emplyee Updated")
//         console.log("Update",result.data)

//     } 

//         return (
//             <div className='content'>
                
//                 <Toolbar></Toolbar>
//                 <Card className = 'form'>
//                     <Input
//                     placeholder="Search..."
//                     className='search'
//                     // inputProps={{'aria-label':'search'}}
//                     />
//                     <h3 className='title'>Employee Details<input className='user' placeholder='+Add User'></input></h3>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow className='TableRow' style={{backgroundColor: '#42515F', width: '1549px',height: '67px'}}>
//                                 <TableCell className='TableHeaderCell'>Name</TableCell>
//                                 <TableCell className='TableHeaderCell'>Gender</TableCell>
//                                 <TableCell className='TableHeaderCell'>Department</TableCell>
//                                 <TableCell className='TableHeaderCell'>Salary</TableCell>
//                                 <TableCell className='TableHeaderCell'>Start Date</TableCell>
//                                 <TableCell className='TableHeaderCell'>Action</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {
//                                     //  employee.map((employees)=>(
                                
//                             <TableRow >   
                                    
//                                         <TableCell> {employee.employeeName} </TableCell>
//                                         <TableCell> {employee.gender} </TableCell>
//                                         <TableCell> {employee.department}</TableCell>
//                                         <TableCell> {employee.salary}</TableCell>
//                                         <TableCell> {employee.startDate}</TableCell>
//                                         <TableCell onClick={()=>{
//                                         deletearr(employee.employeeName)
//                                         }}>
//                                         <TableCell onClick={()=>{
//                                         updatearr(employee.token)
//                                     }}>
                       
//                                     <TableCell className='action'><DeleteIcon/> </TableCell>
//                                     <TableCell className='action'><EditIcon/> </TableCell>
//                                     </TableCell> </TableCell>    

//                             </TableRow>
                            
//                                     //  ))
//                             }
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 </Card>
//             </div>
//         )
//     }





// import React,  {useEffect, useState} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import './EmpCardDetails.css';
// import Toolbar from '@mui/material/Toolbar';
// import axios from 'axios';

// export default function EmpCardDetails()  {

    
//         const [employee,setEmployee]=useState([])
//         useEffect(()=>{
//             loadEmployee();
//         },[]);

//         const loadEmployee=async()=>{
//             const result=await axios.get("http://localhost:8080/getAllEmployees")
//             setEmployee(result.data);
//         }
//         return (
//             <div>
//                 <Toolbar></Toolbar>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow className='TableRow' style={{backgroundColor: '#42515F', width: '1549px',height: '67px'}}>
//                                 <TableCell className='TableHeaderCell'>Name</TableCell>
//                                 <TableCell className='TableHeaderCell'>Gender</TableCell>
//                                 <TableCell className='TableHeaderCell'>Department</TableCell>
//                                 <TableCell className='TableHeaderCell'>Salary</TableCell>
//                                 <TableCell className='TableHeaderCell'>Start Date</TableCell>
//                                 <TableCell className='TableHeaderCell'>Action</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {
//                                 employee.map((employees)=>(
//                                     <TableRow >                           
//                                         <TableCell> {employees.name} </TableCell>
//                                         <TableCell> {employees.gender} </TableCell>
//                                         <TableCell> {employees.department}</TableCell>
//                                         <TableCell> {employees.salary}</TableCell>
//                                         <TableCell> </TableCell>
//                                     </TableRow>
//                                 ))
//                             }
//                         </TableBody>
//                     </Table>
//                 </TableContainer>

//             </div>
//         )
//     }