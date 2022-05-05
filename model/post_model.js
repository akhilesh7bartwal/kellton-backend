const mongoose= require('mongoose')

const postSchema = mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        routeName:{
            type:String,
            required:true
        },
        items:{
            type:Array,
            required:true
        }
    }
)
module.exports = mongoose.model('shop_data', postSchema)