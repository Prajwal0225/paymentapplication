import React from 'react'
import { useState } from 'react'
import FormHeader from '../Component/FormHeader'
import FormSubHeading from '../Component/FormSubHeading'
import InputField from '../Component/InputField'
import FormButton from '../Component/FormButton'
import FormBox from '../Component/FormBox'
import FormRedirect from '../Component/FormRedirect'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  return (
    <>
        <FormBox>
        <FormHeader heading="Sing Up"/>
        <FormSubHeading subHeading="Enter your information to create an account"/>
        
        <InputField onChange={e=>{
          setFirstName(e.target.value)
        }} fieldname="First Name" placeholder ="John"/>
        
        <InputField onChange={e=>{
          setLastName(e.target.value)
        }} fieldname="Last Name" placeholder ="Doe"/>
        
        <InputField onChange={e=>{
          setUsername(e.target.value)
        }} fieldname="Email" placeholder ="JohnDoe@example.com"/>
        
        <InputField onChange={e=>{
          setPassword(e.target.value)
        }} fieldname="Password" placeholder ="John"/>

        <FormButton onClick={ async()=>{
            const response = await axios.post('http://localhost:80/api/v1/user/signup',{
              username,
              password,
              firstName,
              lastName
            })
            localStorage.setItem("token", response.data.token)
            navigate('/dashboard')
            console.log(response);
        }} buttontype="Sign Up"/>

       <FormRedirect text="Already have account?" redirectto="signin"/>
        </FormBox>
       
    </>
  )
}

export default SignUp
