import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h6>gg</h6>
    </div>
  )
}

export default UserDetail