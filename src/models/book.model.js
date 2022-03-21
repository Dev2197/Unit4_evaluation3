const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes : {type:Number, required:false, default:0},
    coverImage : {type:String, required:true},
    content : {type:String, required:true},
    userId : {type: mongoose.Schema.Types.ObjectId, ref: "user", required:true}

},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("book",bookSchema);