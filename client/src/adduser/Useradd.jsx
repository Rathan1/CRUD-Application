import  { useState } from 'react';
import './Useradd.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const Useradd = () => {
  // Corrected state initialization
  const initialUserState = {
    name: "",
    email: "",
    address: "",  // Corrected to 'address' from 'Address'
    phone: "",    // Corrected to 'phone' from 'Phone'
  };

  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://user-management-app-h3iz.vercel.app/api/user", user);
      // Assuming response.data.message is available if you want to display success message
     toast.success(response.data.message, { position: "top-right" });
      navigate("/enter"); // Navigate to home or any other route after successful submission
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className='addUser'>
      <Link to="/enter" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> BACK
      </Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            onChange={inputHandler}
            name='name'
            autoComplete='off'
            placeholder='Enter Your Name'
          />
        </div>

        <div className='inputGroup'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            onChange={inputHandler}
            name='email'
            autoComplete='off'
            placeholder='Enter Your Email'
          />
        </div>

        <div className='inputGroup'>
          <label htmlFor='address'>Address:</label> {/* Corrected to 'address' */}
          <input
            type='text'
            id='address'
            onChange={inputHandler}
            name='address'
            autoComplete='off'
            placeholder='Enter Your Address'
          />
        </div>

        <div className='inputGroup'>
          <label htmlFor='phone'>Phone:</label> {/* Corrected to 'phone' */}
          <input
            type='text'
            id='phone'
            onChange={inputHandler}
            name='phone'
            autoComplete='off'
            placeholder='Enter Your Phone'
          />
        </div>

        <div className='inputGroup'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Useradd;
