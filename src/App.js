import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Address from './pages/address/Address';
import SignUp from './pages/home/SignUp';
import Login from './pages/login/Login';
import Reset from './pages/reset password/Reset';

function App() {
  return (
    <>
     <Router>
     
        <Routes>
          <Route exact path="/" element={<SignUp />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/reset-password" element={<Reset/>}/>
          <Route exact path="/return-address" element={<Address/>}/>
        </Routes>
     
    </Router>

    </>
  );
}

export default App;
