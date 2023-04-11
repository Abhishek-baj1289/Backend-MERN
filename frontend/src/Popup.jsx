import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './assets/PopupCSS.css'
const Popup = props => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const location = useLocation();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {firstname, lastname, pwd, stat} = e.target;
        const updateData = {
            "v_id":props.user.vid,
            "new_fname": firstname.value,
            "new_lname": lastname.value,
            "new_pwd": pwd.value,
            "new_role": stat.value
        }
        setUserData(updateData);
    }
    const handleUpload=async()=>{
        try{
            const updatedUser = await fetch('http://localhost:3500/users',{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            props.setPath(location.pathname)
            
        }catch(err){
            console.log(err?.message)
        }
    }
    useEffect(()=>{
        try {
            console.log('useeffect called', userData);
            if (Object.keys(userData).length === 0) {
              console.log('jugaad lafa')
            } else {
              handleUpload(userData);
            //   console.log(props.path)
              navigate('/')
            }
        } catch (err) {
            console.log(err?.message)
        }
    },[userData])

    return (
        <div className="popup-box">
        <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
                <form onSubmit={handleSubmit}>
            
                    <label>You are editing User ID: {props.user.vid}
                    </label><br />
                    <label>Enter your first name:
                        <input type="text" id='fname' name='firstname' />
                    </label><br />
                    <label>Enter your last name:
                        <input type="text" id='lname' name='lastname' />
                    </label><br />
                    <label>Enter your Password:
                        <input type="text" id='pwd' name='pwd' />
                    </label><br />
                    <label>Enter your Status:
                        <input type="text" id='stat' name='stat' />
                    </label>
                    <button type='submit'>submit</button>
                </form>
        </div>
        </div>
    );
};

export default Popup;