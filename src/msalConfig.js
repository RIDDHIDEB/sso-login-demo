import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: 'b4aef742-75b6-472e-a6e9-d4d66e570f56',
    authority: 'https://login.microsoftonline.com/420fe8d6-bf12-4b0d-b544-2d446b8609de',
    redirectUri: 'http://localhost:3000',
    // postLoginRedirectUri: 'http://localhost:3000/table',
  },
  cache: {
    cacheLocation: "localStorage", 
    storeAuthStateInCookie: true, 
},
system:{
    loggerOptions:{
        loggerCallback:(level, message, containsPii) =>{
            if(containsPii){
                return;
            }
            switch(level){
                case LogLevel.Error:
                    console.error(message);
                    return;
                
                case LogLevel.Info:
                    console.info(message);
                    return;
            }
        }
    }
}
} 

export const loginRequest = {
    scopes: [ 'user.read']
}

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

