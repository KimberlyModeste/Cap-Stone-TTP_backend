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
})

module.exports = model('User', userSchema)