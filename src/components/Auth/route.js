import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
// const Login = lazy(() => import("./login"));
const Signup = lazy(() => import("./signup"));
// const Verify = lazy(() => import("./verification"));
// const verifyEmail = lazy(() => import("./verifyEmail"));
// const ForgotPassword = lazy(() => import("./forgotpassword"));
// const ResetPassword = lazy(() => import("./resetpassword"));
// const ForgotPassword = lazy(() => import("./ForgotPassword"));

function Routes(props) {
    return (
        <Switch>
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/verify/account" component={Verify} />
            <Route exact path="/verify/email" component={verifyEmail} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} /> */}
            {/* <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} /> */}
        </Switch>
    );
}

export default Routes;