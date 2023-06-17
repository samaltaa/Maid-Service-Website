import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-cente justify-between flex-wrap bg-teal-500 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-9'>
            <span className='font-semibold text-xl tracking-tight'>Miracle Cleaning </span>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto mx-auto'>
            <div className=' flex justify-end text-sm lg:flex-grow mx-auto'>
                <a href='' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4'>Home</a>
                <a href='' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4'>Services</a>
                <a href='' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4'>About</a>
                <a href='' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4'>Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Header