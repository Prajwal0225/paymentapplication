// backend/routes/account.js
const express = require('express');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const {authMiddleware} = require('../middleware');

const router = express.Router();

router.get("/balance",authMiddleware,async(req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})

router.post("/transfer",authMiddleware,async(req,res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();

    const {amount,to} = req.body

    const sender = await Account.findOne({userId:req.userId}).session(session);
    
    if(!sender || sender.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            message: "Insufficient balance"
        });
    }else{
        const receiver = await Account.findOne({userId:to}).session(session);

        if(!receiver){
            await session.abortTransaction();
            res.status(400).json({
                message: "Invalid account"
            })
        }else{ 
        await Account.updateOne({
            userId: req.userId
        },{
            $inc:{
                balance: -amount
            }
        }).session(session);

        await Account.updateOne({
            userId: to
        },{
            $inc:{
                balance: amount
            }
        }).session(session)

        session.commitTransaction();
        res.json({
            message:"Trasfer Successfully"
        })
    }   
} 
})


router.get("/all",async(req,res)=>{
    const data = await Account.find({});
    res.json({
        data
    })
})

module.exports = router;