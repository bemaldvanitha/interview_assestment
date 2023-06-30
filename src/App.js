import { Routes, Route, Navigate } from 'react-router-dom';

import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/sign-up'} element={<SignupScreen/>}/>
        <Route path={'/log-in'} element={<LoginScreen/>}/>
        <Route path={'/dashboard'} element={<DashboardScreen/>}/>
          <Route path="*" element={<Navigate to="/sign-up" />} />
      </Routes>
    </div>
  );
}

export default App;
