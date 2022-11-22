import React, { Component } from 'react'
import PayrollAppBar from '../Components/AppBar/PayrollAppBar'
import EmployeeCard from '../Components/EmpDetailsCard/EmployeeCard'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <PayrollAppBar/>
        <EmployeeCard/>
      </div>
    )
  }
}
