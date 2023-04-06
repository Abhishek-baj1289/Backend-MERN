const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async(req, res)=>{
    const {v_id, firstname, lastname,role, password} = req.body;
    if(!v_id||!firstname||!lastname||!password) return res.status(400).json({"message": "v_id, firstname, lastname, password are required"});
    const hashedPwd = await bcrypt.hash(password,10)
    const duplicate = await User.findOne({vid: v_id});
    if(duplicate) return res.status(409).json({"message":"This user Already Exist"});
    try{
        const result =await User.create({
            "vid": v_id,
            "firstname": firstname,
            "lastname": lastname,
            "status": role,
            "password": hashedPwd,
        })
        console.log(result);
        res.status(201).json({"message": "new user has been created"})

    }catch(err){
        res.status(500).json({"message": err?.message})
    }

}
const getUsers = async(req, res)=>{
    try {
        const results = await User.find();
        if(!results) return res.status(400).json('no users found')
        res.json(results)
    } catch (error) {
        res.status(500).json({"message": error?.message})
        
    }
}


module.exports= {createUser, getUsers}