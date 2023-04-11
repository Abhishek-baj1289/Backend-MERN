import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>404 Not Found</h3>
      <button onClick={()=>navigate('/')}>Home</button>
    </div>

  )
}

export default NotFound