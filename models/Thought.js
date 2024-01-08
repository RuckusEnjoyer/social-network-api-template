const { Schema, model } = require('mongoose');
const { reactionSchema } = require('Reaction.js')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,

        },
        createdAt: {

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