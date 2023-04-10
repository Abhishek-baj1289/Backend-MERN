import React from 'react'

const UserItem = ({data, search}) => {
  return (
    <>
    <ul>
    {data.filter(item => item.firstname.includes(search)).map(item => (
      <li key={item._id}>Name: {item.firstname} {item.lastname} <br />Status: {item.status}</li>
    ))}
  </ul>
  </>
  )
}

export default UserItem