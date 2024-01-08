const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            //Automatically spawns a new ObjectId on Default
            //**EMBEDDED MODELS NEED TO HAVE THIS PUT IN BY HAND!/
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            //280 character max
            maxLength: 280,
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            //Date.now() is a function that takes from EPOCH time
            default: Date.now(),
            get: time => new Date(time)
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

module.exports = reactionSchema