import  { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './registration-styles.css';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginPage = () => {

    const [loginData,setData]=useState({
        username:'',
        password:'',
    })

    const navigate=useNavigate();

    //submit function
    const handleLoginSubmit=async (e)=>{
        e.preventDefault();
         //to check whether the user is registered or not
        try{            
            //axios to fetch and post the data
          const response= await axios.post('http://user-management-app-h3iz.vercel.app/api/login',loginData);
         const {success,message}=response.data;
         if(success){
            console.log("login successful")
            toast.success('Login Successful', {
                position: 'top-right'
              });
        }
        else{
            console.log(message);
            navigate('/enter');
        }
    }catch(error){
        console.error('Login error',error)
        toast.error('Login failed. Please try again.', {
           position: 'top-right'
         });
        }
        // to erase all again set null
        setData({
            username:'',
            password:''
        })
    }

    const HandleLoginChange=(e)=>{
     const {name,value}=e.target;
    //  console.log(name);
     setData((prevData)=>({
        ...prevData,
        [name]:value
     }))
    }
  return (
    <div  className='registration-form'>
    <h3>Welcome,</h3>
    <h3>To UserManagementApp</h3>
    <h1>LoginPage</h1>
    <form onSubmit={handleLoginSubmit}>
        <input
            type='text'
            name='username'
            value={loginData.username}
            placeholder='Username'
            onChange={HandleLoginChange}
            required
        />

     <input
            type='password'
            name='password'
            value={loginData.password}
            placeholder='Password'
            onChange={HandleLoginChange}
            required
        />

        <button type='submit'>Login</button>
        <ToastContainer position="TOP-right" />
       <p>
        Not Registered yet?
        <Link to ='/registration'>  Register Here</Link>
       </p>
    </form>
    </div>
  )
}

export default LoginPage;
