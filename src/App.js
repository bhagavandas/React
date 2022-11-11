import logo from './logo.svg';
import './App.css';
import Calculator from './Components/CounterComponent/Calci';

import Child from './Components/ParentChild/Child';

import { MuiAppBar } from './Components/CounterComponent/PayrollAppBar';




function App() {
  return (
    <div style ={{display:"flex", justifyContent:"center"}}>
   <Calculator/> 
   {/* <Child/>
   {/* <EmployeePayroll/> */}
   {/* <PayrollApp/> */}
   {/* <MuiCard/>
   <MuiAppBar/> */}

   
 
   </div>
     );
   }
export default App;
