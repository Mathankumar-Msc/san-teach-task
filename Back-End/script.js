const express = require('express')
const app = express();
require("dotenv").config();
const mongoose =require('mongoose');
const cors = require('cors');
const router = require('./router/router');
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("db connected successfully");
})
.catch(()=>{
    console.log("db not connect");
})
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.listen(process.env.PORT,()=>{
    console.log("server is running on port:",process.env.PORT);
})