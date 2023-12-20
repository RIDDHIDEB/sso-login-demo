import React,{useState,useEffect} from 'react'
import AppRoute from './AppRoute';
import Table from './Components/Table/Table';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import './App.css';
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useIsAuthenticated,
  useAccount
} from "@azure/msal-react"; 
import { PublicClientApplication } from "@azure/msal-browser";
import { InteractionStatus } from "@azure/msal-browser"; 
import {msalConfig, loginRequest } from "./msalConfig";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const AppContainer = () =>{
  
  const [graphData, setGraphData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [id, setid] = useState(null)
  const [uniqueId, setUniqueId] = useState("");
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const account = useAccount(accounts[0] || {});
  
  useEffect(() => {
    if (isAuthenticated && account) {
      instance.acquireTokenSilent({
        ...loginRequest,
        account: account
      }).then((response) => {

        localStorage.setItem('uniqueid', response.uniqueId);
        localStorage.setItem('accesstoken', response.idToken);
        //debugger
        setAccessToken(response.accessToken)
        setUniqueId(response.uniqueId)
        setid(response.uniqueId)
        //callMsGraph(response.accessToken).then(response => setGraphData(response));

      }).catch((error) => {

        instance.acquireTokenRedirect({
          ...loginRequest,
          account: account
        }).then((response) => {
          localStorage.setItem('uniqueid', response.uniqueId);
          localStorage.setItem('accesstoken', response.idToken);
          //debugger
          setAccessToken(response.accessToken)
          setUniqueId(response.uniqueId)
          setid(response.uniqueId)
          //callMsGraph(response.accessToken).then(response => setGraphData(response));

        })
      })
    }
  },[isAuthenticated,account])

  return (
    <>
    <AuthenticatedTemplate>
    {/* <Router>
      <Routes>
        <Route path='/table' element={<Table/>}/>
      </Routes>
    </Router> */}
    <Table/>
    </AuthenticatedTemplate>

    <UnauthenticatedTemplate>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router> */}
      <Home/>
    </UnauthenticatedTemplate>
    </>
  );
}

function App(){
  const msalInstance = new PublicClientApplication(msalConfig);

  return (

    <MsalProvider instance={msalInstance}>

      <AppContainer></AppContainer>

    </MsalProvider>

  );
}

export default App;

// const navigate = useNavigate();

//   useEffect(() => {
//     const handleRedirect = async () => {
//       if (!isAuthenticated && inProgress === InteractionStatus.None) {
//         try {
//           const loginResponse = await instance.loginRedirect(loginRequest);
//           // You can add additional logic here if needed
//           console.log("Login successful:", loginResponse);
//           navigate('/table'); // Redirect to /table after successful login
//         } catch (error) {
//           console.error("Login error:", error);
//         }
//       }
//     };
//     handleRedirect();
//   }, [isAuthenticated, inProgress, instance, navigate]);