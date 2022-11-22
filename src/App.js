
// import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Hometable from './Pages/Hometable';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";




function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/Homepage" element={<Homepage/>}>
        </Route>
        <Route exact path="/Hometable" element={<Hometable/>}>

        </Route>
      </Routes>
    </Router>
      


    </div>
  );
}

export default App;
