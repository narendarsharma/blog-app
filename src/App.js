import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Login from './Pages/Login';
import Services from './Pages/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from './Pages/user-route/userdashboard';
import Privateroute from './components/Privateroute';
import ProfileInfo from './Pages/user-route/ProfileInfo';
function App() {
  return (
          <BrowserRouter >
          <ToastContainer />
          <Routes >
            <Route path="/"  element={<Home/> } />
            <Route path="/login"  element={<Login/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/singUp"  element={<SignUp/>} />
             <Route path='/services' element={<Services/>}/>
             <Route path='/user' element={<Privateroute/>}>
             <Route path='dashboard' element={<Userdashboard/>}/>
             <Route path='profile-info' element={<ProfileInfo/>}/>


             </Route>

           </Routes>
 
          </BrowserRouter>
  );
}

export default App;
