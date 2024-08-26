import React from 'react'

function FormBox({children}) {
  return (
    <>
    <div className='flex items-center justify-center min-h-screen'>
    <div className='m-6 p-5 bg-white rounded-xl'>
        {children}
    </div>
    </div>
    </>
  )
}

export default FormBox
