const mongoose  = require("mongoose")

const item_schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{timestamp: true})


const Items = mongoose.model('items',item_schema)

module.exports = Items