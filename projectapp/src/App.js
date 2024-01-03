import './App.css';
import Home1 from './Components/Home1';
import Signup from './Components/SignUp';
import Login from './Components/Login';
// import NavBar from './Components/NavBar'
import Topr from './Components/Topr';
import Mai from './Components/Mai';
import Dashboard from './Components/Dashboard';
import './Assets/CSS/Home1.css';
import './Assets/CSS/Signup.css';
import './Assets/CSS/Topr.css';
import './Assets/CSS/Sidebar.css';
import './Assets/CSS/Login.css';
import './Assets/CSS/Mai.css';
import {Routes ,Route} from "react-router-dom"
import Landing from './Components/Landing';
function App() {
  return (
  <div className="App">
      <Topr/>
      <Routes>
       
        <Route path = "/" element ={<Landing/>}/>
        <Route path = "/home" element ={<Home1/>}/>
        <Route path = "/Login" element ={<Login/>}/>
        <Route path = "/SignUp" element ={<Signup/>}/>
        {/* <Route path = "/Navbar" element ={<NavBar/>}/> */}
       </Routes>
       <Dashboard/>
    </div>
  );
}

export default App;
