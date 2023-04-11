import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserItem = ({data, search}) => {
  const navigate = useNavigate();
  return (
    <>
    <ul>
    {data.filter(item => item.firstname.toLowerCase().includes(search) || item.lastname.toLowerCase().includes(search)).map(item => (
      <li key={item._id} onClick={()=>navigate(`/user/${item._id}`)}>Name: {item.firstname} {item.lastname} <br />Status: {item.status}</li>
    ))}
  </ul>
  </>
  )
}

export default UserItem