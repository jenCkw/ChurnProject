import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="app">
        <SideBar/>
        <Home/>
      </div>
    
    </div>
  );
}

export default App;
