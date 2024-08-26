import React from 'react'

function UserBox() {
  return (
    <>
       <div className='flex justify-between m-4 border border-gray-3 p-4 rounded-xl'>
    <div className='flex justify-center items-center'>
    <span className='font-bold bg-slate-400 rounded-full py-1.5 px-3 mr-4'>U</span>
    <p className='font-semibold'>User1</p>
    </div>
    <button className='px-3 py-1.5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Send Money</button>      
    </div>
    </>
  )
}

export default UserBox
