const { Schema, model } = require("mongoose");

const commentSchema = new Schema ({
        content: {
                type: String,
                required: true,
        },
        blogId: {
                type: Schema.Types.ObjectId,
                ref: "Blog",
        },
        createdBy: {
                type: Schema.Types.ObjectId,
                ref: "User",
        },
    },
        { timestamps: true}
);

const Comment = model('comment', commentSchema);

module.exports = Comment;