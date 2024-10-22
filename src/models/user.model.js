import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true} ,
    passwordReset:{
        type:Boolean,
        default: false
    },
   
    role:{
        type: String,
        default:'USER'
    },

    tasks:{
        type:[
            {
               task:{
                type:mongoose.Schema.Types.ObjectID,
                ref: 'tasks'
               } 
            }
          
        ],
        default :[]
      
    },

    teams:{
        type:[
            {
               team:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'teams'
               } 
            }
          
        ],
        default :[]
      
    },

   

})
const userModel = mongoose.model('users',userSchema) 

export default userModel;