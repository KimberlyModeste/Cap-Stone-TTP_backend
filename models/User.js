const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    org: Boolean,
    email: String,
    createdAt: String,
    payments: [
        {
            to: String, 
            amount: String,
            createdAt: String,
        }
    ],
    image: String,
    followers: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    following: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }

})

module.exports = model('User', userSchema)