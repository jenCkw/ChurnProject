import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/sidebar/SideBar';
import Login from './components/login/Login';

import Customer from './components/customer/Customer';
import CustomerInfo from './components/customerInfo/CustomerInfo';
import User from './components/user/User';
import Home from './components/home/Home';



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <div className="app">
              <SideBar/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/customer" component={Customer}/>
              <Route exact path="/user" component={User}/>
              <Route exact path="/parameter" component={CustomerInfo}/>
            </div>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
