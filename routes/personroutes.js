const express=require('express');
const router =express.Router();

const person =require('./../models/person');

router.post('/',async(req,res)=>{
    try{
      const data= req.body
      const newPerson=new person(data);
      const response= await newPerson.save();
      console.log('data saved successfully');
      res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
   
  })

  router.get('/',async(req,res)=>{
    try{
    
      const data=await person.find();
      console.log('data fetched successfully');
      res.status(200).json(data);
    }
    
    
    catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
   
  })

  router.get('/:worktype',async(req,res)=>{

    try{
      const worktype =req.params.worktype;
      if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
        console.log('worktype fetched ');
        const response = await person.find({work:worktype});
        res.status(200).json(response);
      }else{
        console.log('invalid worktype');
      }

    }catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'});

    }
        
  })


  router.put('/:id',async(req,res)=>{
    try{
        const id  = req.params.id;
      const  updatedpersondata  = req.body;

      const response = await person.findByIdAndUpdate(id,updatedpersondata, {
        new:true,
        runValidators:true
      })

      if(!response){
        return res.status(404).json({error:'person not found'});
      }
       console.log('data updated');
       res.status(200).json(response);


    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
  
      }
  })
    

  router.delete('/:id',async(req,res)=>{
    try{
        const id  = req.params.id;
      

      const response = await person.findByIdAndDelete(id);

      if(!response){
        return res.status(404).json({error:'person not found'});
      }
       console.log('data deleted successfully');
       res.status(200).json(response);


    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
  
      }
  })
  module.exports =router;