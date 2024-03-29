const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
          },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
            }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)
//TO DO: VIRTUALS: WILL GIVE THE SUM OF ALL FRIENDS
userSchema
.virtual('friendCount')
.get(function (){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;