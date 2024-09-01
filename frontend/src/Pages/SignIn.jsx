import React, { useState } from 'react'
import FormHeader from '../Component/FormHeader'
import FormSubHeading from '../Component/FormSubHeading'
import InputField from '../Component/InputField'
import FormButton from '../Component/FormButton'
import FormBox from '../Component/FormBox'
import FormRedirect from '../Component/FormRedirect'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignIn() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
         <FormBox>
        <FormHeader heading="Sing In"/>
        <FormSubHeading subHeading="Enter your credentials to access your account"/>
        <InputField onChange={e=>setUsername(e.target.value)} fieldname="Email" placeholder ="JohnDoe@example.com"/>
        <InputField onChange={e=>setPassword(e.target.value)} fieldname="Password" placeholder ="John"/>
        
        <FormButton onClick={async()=>{
          const response = await axios.post("http://localhost:80/api/v1/user/signin",{
            username,
            password
          })
          localStorage.setItem("token", "Bearer " + response.data.token);
          navigate('/dashboard')
        }} buttontype="Sign In"/>
        <FormRedirect text="Don't Have an sccount?" redirectto="signup"/>
        </FormBox>     
    </>
  )
}

export default SignIn
