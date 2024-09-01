import React, { useEffect, useState } from 'react'
import UserBox from '../Component/UserBox'
import axios from 'axios';

function Desktop() {
  const [balance,setBalance] = useState();
  const [username,setUsername] = useState('U');
  
  
  useEffect(()=>{
    const fetchbalance =async()=>{
      const response = await axios.get("http://localhost:80/api/v1/account/balance",{
          headers: {
            authorization: localStorage.getItem("token")
          }
      })
      setBalance(response.data.balance);
    }
    fetchbalance();
    
  },[]);

  useEffect(()=>{
    const fetchName = async()=>{
      const response = await axios.get("http://localhost:80/api/v1/user/username",{
          headers: {
            authorization: localStorage.getItem("token")
          }
      })
      setUsername(response.data.firstName);
    }
    fetchName();
  },[])

  return (
    <div className='min-h-screen bg-white'>
    <div className='flex justify-between pt-6 mb-5 mr-3 ml-3 items-center'>
    <h1 className='text-2xl font-bold'>Payments App</h1>

    <div className='flex justify-center items-center'>
    <h3 className='font-medium mr-4'>Hello, <strong>{username}</strong></h3>
    <span className='font-bold bg-slate-400 rounded-full py-1.5 px-3'>{username[0]}</span>
    </div>
    </div>
    <hr/>

    <p className='font-medium text-xl mt-5 mb-10 ml-3'>Your Balance <strong>${balance}</strong></p>
<UserBox/>
   
    
    </div>
    
  )
}

export default Desktop
