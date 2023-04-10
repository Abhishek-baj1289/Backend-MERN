import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import './assets/FormCSS.css'

const AddUsers = () => {
  const [data, setData] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uid, firstname, lastname, pwd, stat } = e.target;
    const newData = {
      'v_id': uid.value,
      'firstname': firstname.value,
      'lastname': lastname.value,
      'status': stat.value,
      'password': pwd.value
    };
    setData(newData);
  }


  useEffect(() => {
    console.log('useeffect called', data);
    if (Object.keys(data).length === 0) {
      console.log('jugaad lafa')
    } else {
      userSubmit(data)
    }
  }, [data]);



  const userSubmit = async (user) => {
    try {
      await fetch('http://localhost:3500/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

      });

    } catch (err) {
      console.log(err?.message)
    }
  }


  return (
    
    <form onSubmit={handleSubmit}>
      <Navbar/>

      <label>Enter your User ID:
        <input type="text" id='uid' name='uid' required />
      </label><br />
      <label>Enter your first name:
        <input type="text" id='fname' name='firstname' required />
      </label><br />
      <label>Enter your last name:
        <input type="text" id='lname' name='lastname' required />
      </label><br />
      <label>Enter your Password:
        <input type="text" id='pwd' name='pwd' required />
      </label><br />
      <label>Enter your Status:
        <input type="text" id='stat' name='stat' />
      </label>
      <button type='submit'>submit</button>
    </form>
  )

}



export default AddUsers