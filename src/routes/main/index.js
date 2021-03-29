import React, { Suspense, lazy } from "react";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Auth = lazy(() => import("../../containers/Auth"));
const Home = lazy(() => import("../../containers/Home"));
// const Dashboard = lazy(() => import("../../containers/Dashboard"));



    const style = {
    position: "fixed", 
    top: "50%", 
    left: "50%",
    transform: "translate(-50%, -50%)"
}




const App = () => (
        <Router>
            <Suspense fallback={<div style={style}><Loader type="ThreeDots" color="#00000" height={20} width={80} /></div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/contact" component={Home} />
                    <Route exact path="/login" component={Auth} /> */}
                    <Route exact path="/signup" component={Auth} />
                    {/* <Route exact path="/verify/account" component={Auth}/>
                    <Route exact path="/verify/email" component={Auth} />
                    <Route exact path="/forgot-password" component={Auth} />
                    <Route exact path="/reset-password" component={Auth} /> */}
                        
          
                

                </Switch>
            </Suspense>
        </Router>


);

export default App;