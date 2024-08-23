import React from 'react'

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Navbar */}
      <nav className="text-[#00337C] p-4 flex justify-between items-center">
        <h1 className="text-[#00337C] text-2xl">CyberAware</h1>
        <div className="text-[#00337C]">Profile</div>
      </nav>

      {/* Quiz Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {/* Question Number */}
        <div className="text-[#00337C] text-6xl font-bold mb-6">1/5</div>

        {/* Question */}
        <div className="text-4xl text-[#00337C] font-bold mb-8">
          What is the capital of France?
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-8 w-2/3">
          {/* Option 1 */}
          <div className="border-2 border-[#00337C] rounded-md p-4 flex items-center">
            <input type="radio" name="option" id="option1" className="mr-2 w-4 h-4"/>
            <label htmlFor="option1" className="text-[#00337C] text-2xl font-semibold">
              Paris
            </label>
          </div>

          {/* Option 2 */}
          <div className="border-2 border-[rgb(0,51,124)] rounded-md p-4 flex items-center">
            <input type="radio" name="option" id="option2" className="mr-2 w-4 h-4" />
            <label htmlFor="option2" className="text-[#00337C] text-2xl font-semibold">
              Rome
            </label>
          </div>

          {/* Option 3 */}
          <div className="border-2 border-[#00337C] rounded-md p-4 flex items-center">
            <input type="radio" name="option" id="option3" className="mr-2 w-4 h-4" />
            <label htmlFor="option3" className="text-[#00337C] text-2xl font-semibold">
              Berlin
            </label>
          </div>

          {/* Option 4 */}
          <div className="border-2 border-[#00337C] rounded-md p-4 flex items-center">
            <input type="radio" name="option" id="option4" className="mr-2 w-4 h-4" />
            <label htmlFor="option4" className="text-[#00337C] text-2xl font-semibold">
              Madrid
            </label>
          </div>
        </div>
        <div className='mt-6'>
          <button className='inline-block rounded-full bg-[#00337C] text-white p-4 px-12' >Next</button>
        </div>
      </div>
    </div>
  )
}

export default QuizPage