import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'

const Paths = () => {
  return (
    <Routes>
        <Route path='/contact' element={<Contact/>}></Route>   
    </Routes>
  )
}

export default Paths