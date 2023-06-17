import React from 'react'

const ContactForm = () => {
  return (
    <form className='w-full mx-auto max-w-lg bg-white rounded-lg shadow-md p-6'>
      <div className='flex flex-wrap mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Name
          </label>
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='Name'/>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Email
          </label>
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-email' type='text' placeholder='Email'/>
          {/*CODE FOR INPUT LABELS FOR NUMBER OF ROOMS AND SERVICE NEEDED */}
          
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Street Address
          </label>
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-address' type='text' placeholder='Address'/>
        </div>
      </div>
      <div className='flex flex-wrap mx-3 mb-2'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 '>
            City
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="City"/>
        </div>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            State
          </label>
          <div className='relative'>
            <select className='block appearance-none w-full bg-gray-200 border border-teal-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
              <option>New Jersey</option>
              <option>New York</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-400 rounded py-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          type="button"
          className="inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-red-300 mr-4 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          
          >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm