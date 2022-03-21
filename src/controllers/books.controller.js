const express = require("express")
const { body, validationResult } = require('express-validator');
const Book = require("../models/book.model");

const router = express.Router();

router.post("/", 
async(req,res)=>{
    try {
        const books = await Book.create(req.body)
        return res.status(200).send(books);
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router;