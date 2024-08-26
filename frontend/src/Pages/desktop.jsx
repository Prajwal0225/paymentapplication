import React from 'react'
import UserBox from '../Component/UserBox'

function Desktop() {
  return (
    <div className='min-h-screen bg-white'>
    <div className='flex justify-between pt-6 mb-5 mr-3 ml-3 items-center'>
    <h1 className='text-2xl font-bold'>Payments App</h1>

    <div className='flex justify-center items-center'>
    <h3 className='font-bold mr-4'>Hello, User</h3>
    <span className='font-bold bg-slate-400 rounded-full py-1.5 px-3'>U</span>
    </div>
    </div>
    <hr/>

    <p className='font-medium text-xl mt-5 mb-10 ml-3'>Your Balance $5000</p>
    

    <h2 className='font-bold text-xl underline ml-3'>Users</h2>
<div className='px-3'>
    <input type='search' className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-full mt-5 mb-10" placeholder='Search Users...'/>
</div>

<UserBox/>
   
    
    </div>
    
  )
}

export default Desktop
