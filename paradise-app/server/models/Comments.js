const {Schema, model} = require('mongoose');

//creating the comments schema
const commentSchema = new Schema(
    {
        textBody: {
            type: String,
            maxlength: 280
        },
        textAuthor: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "Guest"
        }
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;

