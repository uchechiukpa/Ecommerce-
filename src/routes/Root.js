import React from "react";

import App from "./main";
import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";


const Root = () => (

    <BrowserRouter>
        <App />
    </BrowserRouter>
               
);

export default Root;
