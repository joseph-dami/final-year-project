import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const TablePage = () => {

  const [results, setResults] = useState([]);
  const [shouldNavigate, setShouldNavigate] = useState(false);


  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_HOSTNAME}/api/result`);
        console.log(response.data)
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  // const correct = earnPoints / 10



  if (shouldNavigate) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-12 flex justify-between items-center">
        <h1 className="text-[#325695] text-3xl font-bold cursor-pointer" onClick={() => setShouldNavigate(true)}>CyberAware</h1>
        <div className='font-normal text-3xl'>Hi Admin</div>
      </nav>

      <div className='flex flex-col items-center'>
        <h2 className='my-4 text-5xl text-[#171D1A] font-semibold py-4'> Assessment Result </h2>

        <table class="border-1 border-[#000000] [border-spacing:2rem] rounder-xl">
        <thead>
          <tr>
            <th className="border border-black px-4 py-4 text-2xl">Username</th>
            <th className="border border-black px-4 py-4 text-2xl">Department</th>
            <th className="border border-black px-4 py-4 text-2xl">Total Questions</th>
            <th className="border border-black px-4 py-4 text-2xl">Attempts</th>
            <th className="border border-black px-4 py-4 text-2xl">Score</th>
            <th className="border border-black px-4 py-4 text-2xl">Achieved</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result._id}>
              <td className="border border-black px-4 py-4 font-normal text-lg">{result.username}</td>
              <td className="border border-black px-4 py-4 font-normal text-lg">{result.department}</td>
              <td className="border border-black px-4 py-4 font-normal text-lg">{result.result.length}</td>
              <td className="border border-black px-4 py-4 font-normal text-lg">{result.attempts}</td>
              <td className="border border-black px-4 py-4 font-normal text-lg">{result.points / 10}</td>
              <td className={`border border-black px-4 py-4 font-normal text-lg ${result.achieved == 'Passed' ? 'text-[#2E8540]' : 'text-[#FF6D00]'}`}>{result.achieved}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default TablePage