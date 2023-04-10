import { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import UserDetail from './UserDetail';
import './App.css'
import ShowUsers from './ShowUsers';
// import './Navbar'
import AddUsers from './AddUsers';

function App() {
  return (
    
    <Routes>
      <Route path=':id' element={<UserDetail/>}/>
      <Route path='/' element={<ShowUsers />} />
      <Route path='/add' element={<AddUsers />} />
    </Routes>
    // <ShowUsers/>
  )
}
export default App
