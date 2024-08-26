import React from 'react'
import FormHeader from '../Component/FormHeader'
import FormSubHeading from '../Component/FormSubHeading'
import InputField from '../Component/InputField'
import FormButton from '../Component/FormButton'
import FormBox from '../Component/FormBox'
import FormRedirect from '../Component/FormRedirect'
function SignIn() {
  return (
    <>
         <FormBox>
        <FormHeader heading="Sing In"/>
        <FormSubHeading subHeading="Enter your credentials to access your account"/>
        <InputField fieldname="Email" placeholder ="JohnDoe@example.com"/>
        <InputField fieldname="Password" placeholder ="John"/>
        <FormButton buttontype="Sign Up"/>
        <FormRedirect text="Don't Have an sccount?" redirectto="Sign Up"/>
        </FormBox>     
    </>
  )
}

export default SignIn
