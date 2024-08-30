import React from 'react'
import { Link } from 'react-router-dom'

function FormRedirect({text,redirectto}) {
  return (
    <>
    <Link to={`/${redirectto}`}>
       <h2 className='text-center mt-3'>{text} <span className='font-bold underline hover:text-gray-500 cursor-pointer'>{redirectto}</span></h2>
       </Link>
    </>
  )
}

export default FormRedirect
