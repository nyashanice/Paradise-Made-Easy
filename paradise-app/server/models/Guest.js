//import the Schema and model from Mongoose
const {Schema, model} = require('mongoose');

const guestSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 30
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
          },
          password: {
            type: String,
            required: true,
            minlength: 5,
          },
          phoneNumber: {
            type: String,
            maxlength: 20          
        }
    }
);

const Guest = model("Guest", guestSchema);

module.exports = Guest;