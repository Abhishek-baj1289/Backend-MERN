import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = ({search, setSearch}) => {
  const navigate = useNavigate();
  const searchHandler = (e)=>{
    const search = e.target.value;
    setSearch(search.toLowerCase())

    console.log(search.toLowerCase())
  }
  return (
    <div className="navBar">
      <h3 className="homelink" onClick={()=>navigate('/')}>Home</h3>
      <input type="text" id="search" onChange={searchHandler}/>
    </div>
  )
}

export default Navbar