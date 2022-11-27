const mongoose = require('mongoose');

const Req = new mongoose.Schema({
    name:{
        type:String,
        required:true,   
    },
    email:{
        type:String,
        required:true,
    },
    city:{
        type:String,
    },
    area:{
        type:String,
        
    },
    state:{
        type:String,
        
    },
    address:{
        type:String,
        required:true,  
    },
    lat:{
        type:String,
        required:true,
    },
    lng:{
        type:String,
        required:true,
    }

},
{timestamps: true}
)

module.exports = mongoose.model("Req" , Req)