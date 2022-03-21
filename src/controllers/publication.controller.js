const express = require("express")
const { body, validationResult } = require('express-validator');
const Book = require("../models/publication.model");

const router = express.Router();

router.post("/", 
async(req,res)=>{
    try {
        const publications = await Book.create(req.body)
        return res.status(200).send(publications);
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router;