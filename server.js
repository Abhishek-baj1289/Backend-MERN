const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./connections/dbConn');
const { default: mongoose } = require('mongoose');
connectDB();
const PORT =process.env.PORT || 3500;
const {createUser, getUsers, deleteUsers, updateUsers} = require('./controllers/userController')
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("The server is up and running")
})

app.post('/users', createUser)
app.get('/users', getUsers)
app.delete('/users', deleteUsers)
app.put('/users',updateUsers)




mongoose.connection.on('open',()=>{
    console.log("mongo DB connected");
    app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));
})
