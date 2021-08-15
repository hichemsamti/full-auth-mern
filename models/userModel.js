const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please enter your name"],
        trim :true

    },


    email:{
        type:String,
        required:[true,"Please enter your email"],
       
        unique:true

    },


    password:{
        type:String,
        required:[true,"Please enter your password"],
       

    },


    role:{
        type:Number,
        default:0   // 0 user    1 admin
       

    },


    avatar:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.web2present.com%2Four-team%2Fno-avatar-350x350%2F&psig=AOvVaw1aiuJCyaXf-199phIQdVpR&ust=1629115396638000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiBtPb9svICFQAAAAAdAAAAABAN"
       

    },



},{

    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)