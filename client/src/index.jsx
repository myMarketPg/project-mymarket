import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider 
        domain="dev-2xsecb8qkelfswpd.us.auth0.com" 
        clientId="IAgMVTNhwmUjuFITvdtzfvoJlQocURKa" 
        redirectUri={window.location.origin}>
         <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
         </Provider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
