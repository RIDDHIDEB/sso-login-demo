import React from 'react'
import Pages from './Pages/Pages';
import Table from './Components/Table/Table';
import Login from './Components/Login/Login';
import './App.css';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useIsAuthenticated,
} from "@azure/msal-react"; 
import { loginRequest } from "./msalConfig";

function App() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // useEffect(() => {
  //   if (!isAuthenticated && inProgress === InteractionStatus.None)
  //     instance.loginRedirect(loginRequest).catch((e) => {
  //     });
  //   return () => {};
  // }, [inProgress]);

  return (
    <>
    <AuthenticatedTemplate>
      <Table/>
    </AuthenticatedTemplate>

    <UnauthenticatedTemplate>
      <Login/>
    </UnauthenticatedTemplate>
    </>
  );
}

export default App;
