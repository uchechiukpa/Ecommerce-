import React from "react";
import Dashboard from "../components/Dashboard";
// import ProtectedRoute from "../components/ProtectedRoute";

const App = props => (
    // <ProtectedRoute>
        <Dashboard {...props} />
    // {/* </ProtectedRoute> */}
);

export default App;