const { Schema, model } = require('mongoose');
const  reactionSchema  = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            //Date.now() is a function that takes from EPOCH time
            default: Date.now(),
            get: time => new Date(time)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought