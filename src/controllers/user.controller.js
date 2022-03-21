const express = require("express")
const { body, validationResult } = require('express-validator');
const User = require("../models/user.model");

const router = express.Router()

router.post("/",body("firstName").not().isEmpty().withMessage("First Name requred").isLength({min:3,max:30},
    ), body("lastName").isLength({min:3, max:30}),
    body("age").not().isEmpty().withMessage("Age is required").custom((value)=>{
        if(value <1 || value > 150){
            throw new Error("age must be between 1 and 150")
        }

        return true;
    }), body("email").not().isEmpty().withMessage("Email is requred").
    isEmail().custom(async (value)=>{
        const user = await User.findOne({email:value});

       if(user){
           throw new Error("Email is already taken");
       }

       return true

    }),
    async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await User.create(req.body)

            return res.status(200).send(user)
        } catch (err) {
            return res.status(500).send({message:err.message})
        }
    })

module.exports = router;