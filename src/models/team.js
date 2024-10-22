import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    title: {
        type : String,
        require : true     
    },
    description: {
        type : String,
        require: true
    },
    users: {
        type: [
            {user:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "users"
                }
            }
        ],
        default: []
        
    }
});

const teamModel = mongoose.model('teams', teamSchema);

export default teamModel;