import React from 'react'
import sign_in from '../assets/images/sign-in.svg'

const LoginPage = () => {
  return (
    <>
      <div className='grid grid-cols-2 h-screen'>
        <div className='flex-1 flex flex-col bg-[#FBFAFF] box-border'>
          <h1 className='text-4xl p-6 font-bold text-[#00337C]'>CyberAware</h1>
          <img src={sign_in} />
        </div>
        <div className='flex-1 flex-col px-24 box-border'>
          <h1 className='mt-56 text-4xl font-bold py-4'> Welcome To CyberAware</h1>
          <p className='text-xl font-semi bold text-[#C2C2C2]'>Login in to start</p>
          <div className='flex flex-col'>
            <input type='name' name='name' placeholder='Name' className='border border-gray-200 w-full rounded-lg py-4 px-4 my-4'/>
            <input type='email' name='email' placeholder='Email' className='border border-gray-200 w-full rounded-lg py-4 px-4 my-4'/>
            <input type='name' name='department' placeholder='Department' className='border border-gray-200 w-full rounded-lg py-4 px-4 my-4'/>
          </div>

        </div>
      </div>
    </>
  )
}

export default LoginPage