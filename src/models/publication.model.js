const mongoose = require("mongoose")

const publicationSchema = new mongoose.Schema({
    name : {type:String, required:true},
    bookId : {type: mongoose.Schema.Types.ObjectId, ref: "book", required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("publication",publicationSchema)