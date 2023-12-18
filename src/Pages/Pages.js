import React from 'react';
import Login from '../Components/Login/Login'
import Table from '../Components/Table/Table';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Pages() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/' element={<Table/>}/> */}
      </Routes>
      
    </Router>
    </div>
  )
}

export default Pages;
