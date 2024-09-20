import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Questions from '../components/Questions'
import { MoveNextQuestion } from '../hooks/FetchQuestion'
import { MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'

const QuizPage = () => {

  const [check, setChecked] = useState(undefined)
  const result = useSelector((state) => state.result.result)
  const userData = useSelector((state) => state.result.userData)
  const {queue, trace} = useSelector((state) => state.questions)
  const dispatch = useDispatch()

  useEffect(() => {
  })

  const onNext = () => {

    if (trace < queue.length){
      dispatch(MoveNextQuestion())


      if(result.length <= trace){
        dispatch(PushAnswer(check))
      }
    }
    setChecked(undefined)
  }

  const onPrev = () => {
    console.log('On Prev Click')
    if (trace > 0){
      dispatch(MovePrevQuestion())
    }
  }

  const onChecked = (check) => {
    setChecked(check)
  }

  if (result.length && result.length >= queue.length){
    return <Navigate  to={'/result'} replace={true}></Navigate>
  }

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Navbar */}
      <nav className="p-12 flex justify-between items-center">
        <h1 className="text-[#325695] text-3xl font-bold">CyberAware</h1>
        <div className='font-normal text-3xl'>Hi {userData.username}</div>
      </nav>

      <Questions onChecked={onChecked} />

      <div className='flex justify-center mt-12'>
        <div>
          {trace > 0 ?
          <button className='inline-block rounded-xl text-2xl bg-[#ffffff] text-[#0F172A] border border-[#0F172A]  p-3 px-20 mx-6' onClick={onPrev} >Prev</button>
          : <div></div>
          }
        </div>
        <div>
          <button className='inline-block rounded-xl text-2xl bg-[#0F172A] text-white p-3 px-20' onClick={onNext} >Next</button>
        </div>

    </div>
    </div>
  )
}

export default QuizPage