import React from 'react'

const ResultPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Navbar */}
      <nav className="text-[#00337C] p-4 flex justify-between items-center">
        <h1 className="text-[#00337C] text-2xl">CyberAware</h1>
        <div className="text-[#00337C]">Profile</div>
      </nav>


      <div className='flex flex-col items-center justify-center p-6 text-[#00337C] '>
        <div className='flex flex-col justify-between w-1/3 border p-6 border-[#00337C]'>
          <div className='flex justify-between mb-4'>
            <span>Username:</span>
            <span className='font-bold'>Daily Tuition</span>
          </div>

          <div className='flex justify-between mb-4'>
            <span>Total Quiz Points:</span>
            <span className='font-bold'>5</span>
          </div>

          <div className='flex justify-between mb-4'>
            <span>Total Questions:</span>
            <span className='font-bold'>Daily Tuition</span>
          </div>

          <div className='flex justify-between mb-4'>
            <span>Total Attempts:</span>
            <span className='font-bold'>Daily Tuition</span>
          </div>

          <div className='flex justify-between mb-4'>
            <span>Total Earn Points:</span>
            <span className='font-bold'>Daily Tuition</span>
          </div>

          <div className='flex justify-between mb-4'>
            <span>Quiz Result:</span>
            <span className='font-bold'>Daily Tuition</span>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {/* Question Number */}
        <div className="text-[#00337C] text-6xl font-bold mb-6">Thank you for completing the assessment</div>

        <div className="text-4xl text-[#00337C] font-bold mb-8">
          Your score is 5/5
        </div>

        {/* Question */}
        <div className="text-6xl text-[#00337C] font-bold mb-8">
          You seem to be CyberAware!
        </div>
      </div>
    </div>
  )
}

export default ResultPage