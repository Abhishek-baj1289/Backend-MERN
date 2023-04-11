import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Popup from './Popup';
const UserDetail = ({data}) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [isopen, setIsopen] = useState(false);
  const togglePopup=()=>setIsopen(!isopen)
  let user = data.filter(item=>item._id === id)
  if(user.length===0){
    navigate('/404')

  }else{
    user = user[0];
  }
  const d = {
    "v_id": user.vid
  }
  console.log(d)
  const handleDelete = async() =>{
    try {
      const deleteUser = await fetch('http://localhost:3500/users',{
        method: "DELETE",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(d)
      })
      console.log(deleteUser, 'has been deleted');
      navigate('/')
    } catch (err) {
      console.log(err?.message);
    }
  }
  console.log(id);
  console.log(user);
  return (
    <div>
      <h3>{user.vid}</h3>
      <h6>{user.firstname}</h6>
      <h6>{user.lastname}</h6>
      <h6>{user.status}</h6>
      <div>
        {isopen && <Popup handleClose={togglePopup} user = {user}/>}
      </div>
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={()=>togglePopup()}>Edit User</button>
      <button onClick={()=>handleDelete()}>Delete user</button>
    </div>
  )
}

export default UserDetail