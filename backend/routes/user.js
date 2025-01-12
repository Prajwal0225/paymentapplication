const express = require("express");
const z = require("zod");
const {User, Account} = require("../db")
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const {authMiddleware} = require("../middleware")
require('dotenv').config();

mongoose.connect(process.env.Mongodb_url);

const mySchema = z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})

router.post("/signup",async(req,res)=>{
    const {success} = mySchema.safeParse(req.body);
    
    if(success){
        const userexits = await User.findOne({'username': req.body.username})
        
        if(userexits){
            res.status(411).json({
                message: "Email/username is already taken / Incorrect inputs"
            });
        }else{
            const user1 = await new User({
                username: req.body.username,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            })
            user1.save();

            const userId = user1._id;
            const Account1 = await new Account({
                userId: userId,
                balance: 1 + Math.random() * 10000
            }) 

            Account1.save();
            const token = jwt.sign(
                { 
                    userId
                },JWT_SECRET);
                
            
            const alldata = await User.find({});
            console.log(alldata);
            res.status(200).json(
                {
                    message: "User created successfully",
                    token: token
                })
        }
    }else{
        res.status(411).json({
            message: "Email/username is already taken / Incorrect inputs"
        });
    }
})


const signinBody = z.object({
    username: z.string().email(),
	password: z.string()
})


router.post("/signin",async(req,res)=>{
    const {success} = signinBody.safeParse(req.body);
    if(success){

    const {username,password} = req.body;

    const findUser = await User.findOne({username: username, password:password});
    if(!findUser){
        res.status(411).json({
            message:'Error hile logging in / User not exits in the db'
        })
    }else{
    console.log(findUser);
    const token = jwt.sign({
        userId: findUser._id
    },JWT_SECRET)

    res.status(200).json({
        token: token
    })
}
}else{
    res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    })
}
})

//------------------------------------------------------
//Update data
//------------------------------------------------------

// const updateBody = z.object({
//     password: z.string(),
//     firstName: z.string(),
//     lastName: z.string(),
// })

// router.put("/",authMiddleware, async(req,res)=>{
   
//     const {success} = updateBody.safeParse(req.body);
//     console.log(success);
//     if(!success){
//         res.status(411).json({
//             message: "Error while updating information"
//         })
//     }else{
//     const id = req.userId;
//     console.log(id);
//     const u = await User.findOneAndUpdate({_id:id},req.body);
//         console.log(u);
//    res.json({
//     message:"Updated sucessfully"
//    })
// }
// })

//------------------------------------------------------


router.get("/bulk",authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    const userIdToExclude = new mongoose.Types.ObjectId(req.userId);

    const users = await User.find({
        _id: { $ne: userIdToExclude },
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


router.get("/username",authMiddleware,async(req,res)=>{
    const user = await User.findOne({
        _id: req.userId
    })

    res.json({
        firstName: user.firstName
    })
})


module.exports = router;


