import React, { useState } from 'react'
import FormHeader from '../Component/FormHeader'
import FormBox from '../Component/FormBox'
import InputField from '../Component/InputField'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount,setAmount] = useState();
  const navigate = useNavigate()
  return (
    <>
    <FormBox>
      <FormHeader heading="Send Money"/>

    <div className='flex justify-start items-center'>
      <span className='bg-green-400 rounded-full px-4 py-2 font-bold mr-3'>{name[0].toUpperCase()}</span>   
      <p className='text-2xl font-bold'>{name}</p>
      </div>
    <InputField onChange={e=>setAmount(e.target.value)} fieldname="Amount (in Rs)" placeholder="Enter amount"/>


    <button onClick={async()=>{
      const response = await axios.post("http://localhost:80/api/v1/account/transfer",{
        amount,
        to: id
      },{
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                        navigate("/dashboard")
    }} className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700 dark:border-green-700">Initiate Transfer</button>
      </FormBox>

    </>
  )
}

export default SendMoney
