const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const fs=require('fs');
const path=require('path');
const morgan=require('morgan');
const app=express();
const connectDB=require('./config/dbconnect');
const authRoutes=require('./router/authRoutes');
connectDB();
app.use(express.json()); 

const logpath=path.join(__dirname,'./logs');
if(!fs.existsSync(logpath)){
    fs.mkdirSync(logpath);
}
const accesslogStream=fs.createWriteStream(path.join(logpath,'access.log'),{flags:'a'});

app.use(express.json());
app.use(morgan('combined', { stream: accesslogStream }));
app.use('/api/auth',authRoutes);
app.use('/api/ok',require('./router/userRoutes'));
app.use('/api/leave',require('./router/leaveRoutes'));

app.listen(process.env.PORT,()=>{
console.log("Server running....");
}
);

