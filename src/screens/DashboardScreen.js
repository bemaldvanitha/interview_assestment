import React from "react";
import { useLocation } from 'react-router-dom';

import '../styles/DashboardScreen.css';

const DashboardScreen = () => {
    const location = useLocation();
    const receivedName = location.state?.name;

    return(
        <div className="welcome-textbox">
            <h1>Welcome, { receivedName }</h1>
        </div>
    )
}

export default DashboardScreen;