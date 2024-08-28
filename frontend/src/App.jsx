import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MainLayout from './layouts/MainLayout'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/quiz' element={<QuizPage />} />
    <Route path='/result' element={<ResultPage />} />

    </Route>

)
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App