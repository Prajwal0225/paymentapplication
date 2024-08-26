import React from 'react'
import FormHeader from '../Component/FormHeader'
import FormBox from '../Component/FormBox'
import InputField from '../Component/InputField'
import FormButton from '../Component/FormButton'
function SendMoney() {
  return (
    <>
    <FormBox>
      <FormHeader heading="Send Money"/>

    <div className='flex justify-start items-center'>
      <span className='bg-green-400 rounded-full px-4 py-3 font-bold mr-3'>A</span>   
      <p className='text-2xl font-bold'>Friend's Name</p>
      </div>
    <InputField fieldname="Amount (in Rs)" placeholder="Enter amount"/>


    <button type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-${color}-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700 dark:border-green-700">Initiate Transfer</button>
      </FormBox>

    </>
  )
}

export default SendMoney
