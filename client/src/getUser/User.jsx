import  { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import {Link} from "react-router-dom"
import toast from 'react-hot-toast'

const User = () => {
const [users,setUsers]=useState([]);
useEffect(()=>{
  const fetchData=async()=>{
    try{
    const response=await axios.get("http://localhost:8000/api/users");
    setUsers(response.data)
    //console.log(response.data);

    }catch(error){
    console.log("Error while Fetching the data",error);
    }
  };
  fetchData();
},[]);

//To delete user functionality
const deletedata = async (userId) => {
  await axios
    .delete(`http://localhost:8000/api/delete/user/${userId}`)
    .then((response) => {
      setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
      toast.success(response.data.message, { position: "top-right" });
    })
    .catch((error) => {
      console.log(error);
    });
};
  

  return (
    <div className="userTable">
     <Link to="/add" type="button" className="btn  btn-outline-primary">
    Add User <i className="fa-solid fa-person-circle-plus"></i>
</Link>


{users.length==0?(
  <div className="noData">
  <h3>No Data to display</h3>
  <p>Please Add new Users</p>
  </div>
):(
  <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone} </td>
                <td className="ActionButtons">
                <Link
                 to={`/update/`+user._id}
                 type="button" 
                 class="btn btn-outline-info">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button 
                onClick={()=>deletedata(user._id)}
                 type="button" className="btn btn-outline-danger">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                </td>
              </tr>
            )
        })}
               
        </tbody>
      </table>
)}
   
    </div>
  );
};

export default User;
