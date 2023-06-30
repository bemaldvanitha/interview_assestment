import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { authReducer } from './store/reducers/AuthReducer';

import './App.css';

const store = createStore(authReducer);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Routes>
            <Route path={'/sign-up'} element={<SignupScreen/>}/>
            <Route path={'/log-in'} element={<LoginScreen/>}/>
            <Route path={'/dashboard'} element={<DashboardScreen/>}/>
              <Route path="*" element={<Navigate to="/sign-up" />} />
          </Routes>
        </Provider>
    </div>
  );
}

export default App;
