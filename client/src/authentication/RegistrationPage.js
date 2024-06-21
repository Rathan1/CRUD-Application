import axios from 'axios';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registration-styles.css';

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: ''
  });
 // const navigate=useNavigate();
  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', registrationData);
      // Assuming your API returns a message in the response data upon successful registration
      toast.success(response.data.message, {
        position: 'top-right'
      });
     //navigate("/enter");
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.', {
        position: 'top-right'
      });
    }
    // Reset registration form fields after submission
    setRegistrationData({
      username: '',
      password: ''
    });
  };

  return (
    <div className='registration-form'>
      <h1>Registration Form</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={registrationData.username}
          onChange={handleRegistrationChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={registrationData.password}
          onChange={handleRegistrationChange}
          required
        />
        <button type='submit'>Register</button>
      </form>
      <ToastContainer position="TOP-right" />
      <p>
        Already Registered? <Link to="/">Login Here</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
