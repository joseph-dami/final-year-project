import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import LoginPage from './pages/LoginPage'
import MainLayout from './layouts/MainLayout'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import { CheckUserExist } from './helper/helper'
import FeedbackPage from './pages/FeedbackPage'
import TablePage from './pages/TablePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<LoginPage />} />
    <Route path='/quiz' element={<CheckUserExist><QuizPage /></CheckUserExist>} />
    <Route path='/result' element={<CheckUserExist><ResultPage /></CheckUserExist>} />
    <Route path='/feedback' element={<CheckUserExist><FeedbackPage /></CheckUserExist>} />
    <Route path='/admin' element={<TablePage />} />

    </Route>

)
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App