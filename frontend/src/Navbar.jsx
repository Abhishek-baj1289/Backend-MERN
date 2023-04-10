import React from 'react'

const Navbar = ({search, setSearch}) => {
  const searchHandler = (e)=>{
    const search = e.target.value;
    setSearch(search.toLowerCase())

    console.log(search.toLowerCase())
  }
  return (
    <div className="navBar">
      <h3 className="homelink">Home</h3>
      <input type="text" id="search" onChange={searchHandler}/>
    </div>
  )
}

export default Navbar