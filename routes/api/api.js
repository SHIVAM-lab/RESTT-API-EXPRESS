const express = require('express');
const router  = express.Router;
const members = require('../../model/member-model');
const uuid = require('uuid');
router.get('api/members',(req,res)=>res.json(members));
router.get('api/members/:id',(req,res)=>{
    const found = members.filter(member=> member.id === parseInt(req.params.id));
    if(found){
        res.send(members.filter(member=> member.id === parseInt(req.params.id)));
    }else{
        res.status(200).json({msg:`no user exists with id ${req.params.id}`});
    }
});

//adding member
router.post('api/members',(req,res)=>{
    var newMember ={
       id:uuid.v4(),
       name : req.body.name,
       email :req.body.email
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:`please enter valid name and email`});
    }
    members.push(newMember);
});
//updating the existing member 
router.put('api/members/:id',(req,res)=>{
    const found = members.filter(member=> member.id === parseInt(req.params.id));
    if(found){
        const upmember = req.body;
       members.forEach(member=>{
           if(members.id === parseInt(req.params.id)){
                member.name = upmember.name?upmember.name:member.name,
                member.email = upmember.email?upmember.email:member.name;
           }
        })
        res.status(200).json({msg:`name and email have been updated`},members);
    }else{
        res.status(400).json({msg:`no user exists with id ${req.params.id}`});
    }
});

module.exports = router;