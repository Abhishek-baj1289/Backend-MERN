import { useState, useEffect } from "react";
import { useNavigate ,Link, Router, Routes, useParams } from "react-router-dom";
import Navbar from './Navbar';
import UserDetail from "./UserDetail";
import UserItem from "./UserItem";
function ShowUsers({data, setData}) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return (
      <div className="App">
        <Navbar search={search} setSearch={setSearch} />
        <h3 onClick={()=>navigate('/')}>All users:</h3>
        <UserItem data = {data} search = {search}/>
        <button id="addNew" onClick={()=>navigate('/add')}>Add New</button>
      </div>
    )
  }

export default ShowUsers;