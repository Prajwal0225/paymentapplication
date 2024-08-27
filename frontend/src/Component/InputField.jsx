import React from 'react'

function InputField({fieldname,placeholder,onChange}) {
  return (
    <>
      <p className='font-bold pb-1.5'>{fieldname}</p>

        <input onChange={onChange} className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4' placeholder={placeholder}/>
    </>
  )
}

export default InputField
