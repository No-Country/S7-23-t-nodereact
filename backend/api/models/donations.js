import mongoose from "mongoose";

const userSchema = mongoose.mongoose.Schema({
    amount: {
        type: Number,
        default: 0
    },
    projectId: {
        type: mongoose.Schema.Types.String,
        ref: 'Project'
    },
    date: {
        type: Date,
        default: Date.now 
    },
    userId: {
        type: mongoose.Schema.Types.String,
        ref: 'User'
    },
    comment: {
        type: String,
        require: false,
        minLength: [10, 'Must be at least 10 characters long, {VALUE} is not long enough'],
        maxLength: [200, 'Must be at most 200 characters long, {VALUE} is not supported']
    },
    completed: {
        type: String,
        enum: ['completed', 'rejected', 'pending'],
        default: 'pending'
    },
    class:{
        type: String,
        enum: ['monetary', 'time']
    }
},
{
    timestamps: true
  }
);

const Donation = mongoose.model("Donation", userSchema)
export default Donation