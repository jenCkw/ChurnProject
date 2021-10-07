import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Customer from './components/customer/Customer'
import User from './components/user/User';
import CustomerManager from './components/customerParameter/CustomerManager';

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
              <Route exact path="/parameter" component={CustomerManager}/>
            </div>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
