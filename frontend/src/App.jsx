import { useState, useEffect } from 'react'
import { useNavigate, Route, Routes, Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import UserDetail from './UserDetail';
import './App.css'
import ShowUsers from './ShowUsers';
import NotFound from './assets/NotFound';
// import './Navbar'
import AddUsers from './AddUsers';

function App() {
  const [data, setData] = useState([]);

  return (
    
    <Routes>
      <Route path='/:id' element={<UserDetail/>}/>
      <Route path='/' element={<ShowUsers data = {data} setData = {setData} />} />
      <Route path='/add' element={<AddUsers />} />
      <Route path = '/*' element={<NotFound/>}/>
    </Routes>
    // <ShowUsers/>
  )
}
export default App
