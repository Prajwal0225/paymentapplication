import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function UserBox() {

  const [users,setUsers] = useState([]);
  const [filter,setfilter] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:80/api/v1/user/bulk?filter="+filter,{
      headers: {
      Authorization: localStorage.getItem("token")
  }
})
    .then(response=>{
      setUsers(response.data.user)
    })
    
  },[filter])

  return (
    <>
   
        <h2 className='font-bold text-xl underline ml-3'>Users</h2>
<div className='px-3'>
    <input onChange={e=>{setfilter(e.target.value)}} type='search' className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-full mt-5 mb-10" placeholder='Search Users...'/>
</div>
<div>
{users.map(user=> <User key={user._id} user={user}/>)}
</div>
    </>
  )
}

function User({user}){
  const navigate = useNavigate();

  return(
    <>

    <div className='flex justify-between m-4 border border-gray-3 p-4 rounded-xl'>
    <div className='flex justify-center items-center'>
    <span className='font-bold bg-slate-400 rounded-full py-1.5 px-3 mr-4'>{user.firstName[0]}</span>
    <p className='font-semibold'>{user.firstName} {user.lastName}</p>
    </div>

    <button onClick={e=>{
      navigate("/send?id="+user._id+"&name="+user.firstName);
    }} className='px-3 py-1.5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Send Money</button>      
    </div>
    </>
  )
}

export default UserBox
