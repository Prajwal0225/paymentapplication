import React from 'react'

function FormRedirect({text,redirectto}) {
  return (
    <>
       <h2 className='text-center mt-3'>{text} <span className='font-bold underline hover:text-gray-500 cursor-pointer'>{redirectto}</span></h2>
    </>
  )
}

export default FormRedirect
