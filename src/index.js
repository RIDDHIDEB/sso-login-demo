import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./msalConfig";
import { PublicClientApplication } from "@azure/msal-browser";

// const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   {/* <MsalProvider instance={msalInstance}> */}
      <App />
    {/* </MsalProvider> */}
  </React.StrictMode>
);

reportWebVitals();
