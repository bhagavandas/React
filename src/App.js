import logo from './logo.svg';
import './App.css';

import PayrollAppBar, { MuiAppBar } from './Components/AppBar/PayrollAppBar';
import EmpCard from './Components/EmpDetailsCard/EmpCard';
import EmployeeCard from './Components/EmpDetailsCard/EmployeeCard';
import EmpDetails from './Components/EmpDetailsCard/EmpDetails';


function App() {
  return (
    <div className="App">
       <PayrollAppBar/>
     {/* <EmpCard/> */}
    <EmployeeCard/>
{/* <EmpDetails/> */}

    </div>
  );
}

export default App;
