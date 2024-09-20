import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import sign_in from '../assets/images/sign-in.svg'
import shield from '../assets/images/shield.svg'
import { setUserData } from '../redux/result_reducer'
import { useNavigate } from 'react-router-dom'
import { checkUsernameExists } from '../hooks/setResult'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    const usernameExists = await checkUsernameExists(username);

    if (usernameExists) {
      alert('Username already exists. Please choose another one.');
    } else {
      dispatch(setUserData({ username, email, department }));
      navigate('/quiz');
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 h-screen'>
        <div className='flex-1 flex flex-col bg-[#FBFAFF] box-border'>
          <h1 className="text-[#325695] text-3xl font-bold p-16">CyberAware</h1>
          <img src={shield} className='w-3/4'/>
        </div>
        <div className='flex-1 flex-col px-24 box-border'>
          <h1 className='mt-56 text-5xl text-[#171D1A] font-semibold py-4'> Welcome To CyberAware</h1>
          <p className='text-xl font-normal text-[#454A48]'>Login in to start</p>
          <form onSubmit={submitHandler} className='flex flex-col'>
            <input type='name' name='username' placeholder='Name' className='border border-[#949896] w-full rounded-lg py-4 px-4 my-4' value={username} onChange={(e) => setUsername(e.target.value)} required />

            <input type='email' name='email' placeholder='Email' className='border border-[#949896] w-full rounded-lg py-4 px-4 my-4' value={email} onChange={(e) => setEmail(e.target.value)} required/>

            <input type='name' name='department' placeholder='Department' className='border border-[#949896] w-full rounded-lg py-4 px-4 my-4' value={department} onChange={(e) => setDepartment(e.target.value)} required/>

            <button type='submit' className='inline-block rounded-xl text-2xl bg-[#0F172A] text-white p-3 px-12' >Start</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default LoginPage