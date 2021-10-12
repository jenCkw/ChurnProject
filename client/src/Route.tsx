import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/sidebar/SideBar';
import Login from './components/login/Login';
import './App.css';
import Customer from './components/customer/Customer';
import CustomerInfo from './components/customerInfo/CustomerInfo';
import User from './components/user/User';
import Home from './components/home/Home';
import AddUserForm from './components/user/AddUserForm';
import PrivateRoute from './components/authentication/PrivateRoute';



function Routers() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
          <Route exact path="/login" component={Login}/>
            <div className="app">
              <SideBar/>
              <PrivateRoute exact path="/" component={Home}/>
              <PrivateRoute exact path="/customer" component={Customer}/>
              <PrivateRoute exact path="/user" component={User}/>
              <PrivateRoute exact path="/parameter" component={CustomerInfo}/>
              <PrivateRoute exact path="/adduser" component={AddUserForm}/>
            </div>
          </Switch>
      </div>
    </Router>
  );
}

export default Routers;
