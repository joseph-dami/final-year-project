import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { Navigate } from 'react-router-dom'

const FeedbackPage = () => {
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = useSelector(state => state.questions.queue);
  const result = useSelector(state => state.result.result);
  const answers = useSelector(state => state.questions.answers)
  const userData = useSelector(state => state.result.userData);

  const dispatch = useDispatch()

  const num_of_questions = questions.length;

  const currentQuestion = questions[currentQuestionIndex];

  const onNext = () => {
    if (currentQuestionIndex == num_of_questions -1){
      dispatch(resetAllAction())
      dispatch(resetResultAction())
      setShouldNavigate(true);
    }
    if (currentQuestionIndex < num_of_questions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const onPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

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

      {/* Question Display */}
      <div className='flex flex-col items-center text-center'>
        <div className='w-48 bg-[#E9E9E9] rounded-full py-4 text-xl'>
          Question {currentQuestionIndex + 1} / {num_of_questions}
        </div>
        <h2 className='text-5xl font-semibold max-w-[1200px] m-10'>
          {currentQuestion?.question}
        </h2>
        <ul key={currentQuestion?.id}>
          {currentQuestion?.options.map((option, i) => (
            <label htmlFor={`q${i}-option`} key={i} >
              <li className={`check ${answers[currentQuestionIndex] === i ? 'bg-[#c0dac6c2] hover:bg-[#c0dac6c2]' : result[currentQuestionIndex] === i ? 'bg-[#ffd3b3b6] hover:bg-[#ffd3b3b6]' : ''}`}>
                <input
                  type='radio'
                  value={false}
                  name={`options-${currentQuestionIndex}`}
                  id={`q${i}-option`}
                  checked={answers[currentQuestionIndex] === i}
                  disabled
                />
                <span className="text-3xl font-medium">{option}</span>
                <div className={`check ${answers[currentQuestionIndex] === i ? 'checked' : result[currentQuestionIndex] === i ? 'wrong' : ''}`}></div>

              </li>
            </label>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-center mt-12'>
        {currentQuestionIndex > 0 && (
          <button className='inline-block rounded-xl text-2xl bg-[#ffffff] text-[#0F172A] border border-[#0F172A] p-3 px-20 mx-6' onClick={onPrev}>Prev</button>
        )}
        {currentQuestionIndex <= num_of_questions - 1 && (
          <button className='inline-block rounded-xl text-2xl bg-[#0F172A] text-white p-3 px-20' onClick={onNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
