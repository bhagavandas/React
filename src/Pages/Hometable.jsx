import React, { Component } from 'react'
import PayrollAppBar from '../Components/AppBar/PayrollAppBar'
import EmpCardDetails from '../Components/EmpDetailsCard/EmpCardDetails'


export default class extends Component {
  render() {
    return (
      <div>
        <PayrollAppBar/>
        <EmpCardDetails/>
      </div>
    )
  }
}
