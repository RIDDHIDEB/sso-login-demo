import React from 'react';
import Table from './Components/Table/Table';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';
import ProtectedRoute from './ProtectedRoute';

function AppRoute() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* {isAuthenticated ? <Route path='/table' element={<Table />} /> : <Navigate to="/" />} */}
        {/* <Route path='/table' element={<ProtectedRoute path="/table" element={<Table/>}/>}/> */}
        <Route path='/table' element={<Table/>}/>
      </Routes>
      
    </Router>
    </div>
  )
}

export default AppRoute;



