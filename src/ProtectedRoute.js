/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const getToken = localStorage.getItem('userID');
  console.log('getToken', getToken);
    return (
      <Route {...rest} render={(props) => (
        !!getToken ? 
          <Component {...props} /> : <Navigate to={{ pathname: '/',  state: { from: props.location }}} />   
    )} />
    )
  }

export default ProtectedRoute;
