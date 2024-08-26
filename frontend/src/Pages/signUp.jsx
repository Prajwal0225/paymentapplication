import React from 'react'
import FormHeader from '../Component/FormHeader'
import FormSubHeading from '../Component/FormSubHeading'
import InputField from '../Component/InputField'
import FormButton from '../Component/FormButton'
import FormBox from '../Component/FormBox'
import FormRedirect from '../Component/FormRedirect'
function SignUp() {
  return (
    <>
        <FormBox>
        <FormHeader heading="Sing Up"/>
        <FormSubHeading subHeading="Enter your information to create an account"/>
        <InputField fieldname="First Name" placeholder ="John"/>
        <InputField fieldname="Last Name" placeholder ="Doe"/>
        <InputField fieldname="Email" placeholder ="JohnDoe@example.com"/>
        <InputField fieldname="Password" placeholder ="John"/>
        <FormButton buttontype="Sign Up"/>
       <FormRedirect text="Already have account?" redirectto="Sign In"/>
        </FormBox>
       
    </>
  )
}

export default SignUp
