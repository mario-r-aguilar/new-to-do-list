import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task_title:{
        type:String,
        require:true
    },
    task_description:{
        type: String,
        require:true

    },

    task_status:{
        type:String,
        require:true
    },

   
            
               user:{
                type:mongoose.Schema.Types.ObjectID,
                ref: 'users'
               } 
            
          
     
      
    
})

const taskModel= mongoose.model('tasks',taskSchema)

export default taskModel;