import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetail = ({data}) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const user = data.filter(item=>item._id === id)
  if(user.length===0){
    navigate('/404')

  }
  console.log(id);
  console.log(user);
  return (
    <div>
      <h6>g</h6>
      <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default UserDetail