import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function ShowUsers() {
    const [data, setData] = useState([]);
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
    const addUser = () => {
      navigate('/add')
    }
    return (
      <div className="App">
        <Navbar search={search} setSearch={setSearch} />
        <h3 onClick={()=>navigate('/')}>All users:</h3>
        <ul>
          {data.filter(item => item.firstname.includes(search)).map(item => (
            <li key={item._id}>Name: {item.firstname} {item.lastname} <br />Status: {item.status}</li>
          ))}
        </ul>
        <button id="addNew" onClick={addUser}>Add New</button>
      </div>
    )
  }

export default ShowUsers;