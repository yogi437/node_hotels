const express=require('express');
const route =express.Router();

const router =require('./../models/menu');


route.post('/',async(req,res)=>{
    try{
      const data= req.body
      const newmenu=new Menu(data);
      const response= await newmenu.save();
      console.log('data saved successfully');
      res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
   
  })


  route.get('/',async(req,res)=>{
    try{
    
      const data= await Menu.find();
      console.log('data fetched successfully');
      res.status(200).json(data);
    }
    
    
    catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
   
  })

  module.exports=router;