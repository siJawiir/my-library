import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </div>
  )
}

export default Main