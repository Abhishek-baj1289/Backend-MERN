import { useState, useEffect } from 'react'
import './App.css'
// import './Navbar'
import Navbar from './Navbar';
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3500/users');
      const responseData = await response.json()
      setData(responseData)
    };
    fetchData()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <h3>All users:</h3>
      <ul>
        {data.map(item=>(
          <li key={item._id}>Name: {item.firstname} {item.lastname} <br/>Status: {item.status}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
