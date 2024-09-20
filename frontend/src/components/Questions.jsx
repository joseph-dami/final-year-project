import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'
import '../styles/Question.css'

const Questions = ({ onChecked }) => {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{ isLoading, apiData, serverError}] = useFetchQuestion()

    const num_of_questions = useSelector((state) => state.questions.queue.length)
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(updateResult({ trace, checked}))
    }, [checked])

    function onSelect(i){
      onChecked(i)
      setChecked(i)
    }

    if (isLoading) return <h3 className='text-light'>Loading...</h3>;

    if (serverError) {
      const errorMessage = typeof serverError === 'string' ? serverError : serverError.message || "Unknown Error";
      return <h3 className='text-light'>{errorMessage}</h3>;
    }


  return (
    <div className='flex flex-col items-center text-center'>
      <div className='w-48 bg-[#E9E9E9] rounded-full py-4 text-xl'>Question {trace + 1} / {num_of_questions} </div>
      <h2 className='text-5xl font-semibold max-w-[1200px]  m-10'>
        {questions?.question}
      </h2>
      <ul key={questions?.id}>
        {
          questions?.options.map((q, i) => (
            <label htmlFor={`q${i}-option`}>
              <li key={i} >
              <input
                type='radio'
                value={false}
                name='options'
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
                />

              <span className="text-3xl font-medium">{q}</span>
              <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
              </li>
            </label>
          ))
        }
      </ul>
    </div>
  )
}

export default Questions