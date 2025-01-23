const mongoose= require('mongoose');


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\@.+/,'Por favor ingrese un email valido']
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('User',userSchema)