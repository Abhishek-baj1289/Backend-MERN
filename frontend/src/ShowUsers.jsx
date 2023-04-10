import { useState, useEffect } from "react";
import { useNavigate ,Link, Router, Routes, useParams } from "react-router-dom";
import Navbar from './Navbar';
import UserDetail from "./UserDetail";
import UserItem from "./UserItem";
function ShowUsers() {
    const [data, setData] = useState([]);
    const Params = useParams();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3500/users');
        const responseData = await response.json()
        setData(responseData)
      };
      fetchData()
    }, [])
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