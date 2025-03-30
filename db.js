const mongoose =require ('mongoose');
require('dotenv').config();
// const mongoURL='mongodb://localhost:27017/mydatabase'
// const mongodbURL=process.env.mongodbURL_local;
const mongoURL = process.env.mongodb_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db =mongoose.connection;

db.on('connected',()=>{
console.log('database is connected');
})

db.on('disconnected',()=>{
    console.log('database is disconnected');
    })

    db.on('error',(error)=>{
        console.log('error',error);
        })

        module.exports=db;