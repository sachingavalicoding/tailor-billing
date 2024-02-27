import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CreateForm from './components/CreateForm'
import UserList from './components/UserList'
import UserPreview from './components/UserPreview'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/form' element={<CreateForm />} /> 
        <Route path='/users' element={<UserList />} /> 
        <Route path='/users' element={<UserList />} /> 
        <Route path='/user/:userId' element={<UserPreview />} /> 
       </Routes>
    </BrowserRouter>
  )
}

export default App