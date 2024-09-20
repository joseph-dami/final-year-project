import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { Navigate } from 'react-router-dom'
import { attempts_Number, flagResult, earnPoints_Number } from '../helper/helper'
import { usePublishResult } from '../hooks/setResult'
import fail from '../assets/images/fail.svg'
import pass from '../assets/images/pass.svg'

const ResultPage = () => {

  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [shouldFeedback, setShouldFeedback] = useState(false);

  const dispatch = useDispatch()
  const { questions: {queue, answers}, result : { result, userData }} = useSelector(state => state)

  useEffect(() => {
    // console.log(userData)
  })

  const totalPoints = queue.length * 10
  const attempts = attempts_Number(result)
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoints)
  const correct = earnPoints / 10

  usePublishResult({
    result,
    username: userData.username,
    email: userData.email,
    department: userData.department,
    attempts,
    points: earnPoints,
    achieved: flag ? "Passed" : "Failed"
  })

  const onFinish = () => {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
    setShouldNavigate(true);
  }

  const onFeedback = () => {
    setShouldFeedback(true);
  }

  if (shouldFeedback) {
    return <Navigate to="/feedback" replace={true} />;
  }
  if (shouldNavigate) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-12 flex justify-between items-center">
        <h1 className="text-[#325695] text-3xl font-bold">CyberAware</h1>
        <div className='font-normal text-3xl'>Hi {userData.username}</div>
      </nav>

      <div className='flex flex-col justify-center items-center mt-12'>
        <div className='grid grid-cols-[30%_1fr] gap-6 w-[950px]'>
          <img src={flag ? pass : fail} alt='' />
            <div className={`flex flex-col justify-evenly border-2 rounded-xl p-12 ${flag ? 'border-[#2E8540] bg-[#c0dac61f]' : 'border-[#FF6D00] bg-[#ffd3b31f]'}`}>
              <div className='flex justify-between mb-2'>
                <span className='font-medium text-[40px] text-[#454A48]'>Total Questions:</span>
                <span className='font-medium text-[40px]'>{ queue.length || 0 }</span>
              </div>

              <div className='flex justify-between mb-2'>
                <span className='font-medium text-[40px] text-[#454A48]'>You Answered:</span>
                <span className='font-medium text-[40px]'>{ attempts || 0 }</span>
              </div>

              <div className='flex justify-between mb-2'>
                <span className='font-medium text-[40px] text-[#454A48]'>You got:</span>
                <span className='font-medium text-[40px]'>{ correct || 0 }</span>
              </div>
            </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-grow flex flex-col items-center mt-24 text-center">
        {/* Question */}
        <div className="text-5xl text-[#171D1A] font-medium mb-8">
          {flag ? 'Congratulations' : 'Aww'} {userData.username}! {flag ? 'You did well' : 'Try better next time'}.
        </div>

        <div className='flex justify-between'>
          <button className='inline-block rounded-xl text-3xl bg-[#0F172A] text-white p-3 px-16 mx-2' onClick={onFeedback} >Show Answers</button>
          
          <button className='inline-block rounded-xl text-3xl bg-[#0F172A] text-white p-3 px-16 mx-2' onClick={onFinish} >Continue</button>
        </div>
      </div>
    </div>
  )
}

export default ResultPage