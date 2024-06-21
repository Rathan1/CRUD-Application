
import './App.css';
import User from './getUser/User.jsx'
import Useradd from './adduser/Useradd.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './authentication/LoginPage.js'
import RegistrationPage from './authentication/RegistrationPage.js'
import Updateuser from './updateuser/Updateuser.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/enter" element={<User />} />
          <Route path="/add" element={<Useradd />} />
          <Route path="/update/:id" element={<Updateuser />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
