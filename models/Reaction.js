const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {
            type: String,
            required: true,
            //280 character max
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            
        }
    }
)