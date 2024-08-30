import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
<section class="min-h-screen bg-gradient-to-r from-blue-200 to-blue-300 h-64 w-full text-white-700 body-font flex items-center justify-center">
  <div class="flex flex-col items-center justify-center text-center p-8">
    <h1 class="font-extrabold text-5xl mb-4 sm:text-7xl">Payment Application</h1>
    <p class="mb-6 sm:text-xl">Experience seamless transactions with our payment system</p>
    <div class="flex space-x-4">
    <Link to="/signup">
      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Sign Up
      </button>
</Link>

      <Link to="/signin">
      <button class="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
        Sign In
      </button>
</Link>
    </div>
  </div>
</section>
    </>
  )
}

export default HomePage
