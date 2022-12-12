import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleTopics from '../Topics/SingleTopics'
import Topics from '../Topics/Topics'

function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Topics/>} />
    <Route path="/:id" element={<SingleTopics/>} />
   </Routes>
  )
}

export default AllRoutes