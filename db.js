const mongoose =require ('mongoose');
const mongoURL='mongodb://localhost:27017/mydatabase'

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