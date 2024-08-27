import React from 'react'

function FormButton({buttontype,onClick}) {
  return (
    <>
      <div className='flex justify-center align-center'>

<button onClick={onClick} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-${color}-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{buttontype}</button>
</div>  
    </>
  )
}

export default FormButton
