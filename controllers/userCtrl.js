const Users = require('../models/userModel')


const userCtrl = {

    register:async (req,res) => {
        try{
            
            const {name,email,password} = req.body

            if(!validateEmail(email))

            return res.status(400).json({msg:"Invalid email format"})

            if(!name || !email || !password)
              return res.status(400).json({msg:'Please fill in all the fields'})
          //  console.log(req.body)
            res.json({msg:"Register Test"})

           

        }catch(err){

            return res.status(500).json({msg:err.message})

        }

    }
}

function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

module.exports = userCtrl